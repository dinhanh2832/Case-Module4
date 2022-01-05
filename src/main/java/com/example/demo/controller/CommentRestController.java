package com.example.demo.controller;

import com.example.demo.model.Comment;
import com.example.demo.model.User;
import com.example.demo.service.CommentServiceImpl;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@PropertySource("classpath:application.properties")
@RequestMapping("/api/comments")
public class CommentRestController {
    @Autowired
    private CommentServiceImpl commentService;
    @Autowired
    private UserService userService;

    @GetMapping("")
    public ResponseEntity<Iterable<Comment>> findAllComment() {
        Iterable<Comment> comments = commentService.findAll();
        return new ResponseEntity<>(comments, HttpStatus.OK);
    }

    @GetMapping("/showCommentByNewTime")
    public ResponseEntity<Iterable<Comment>> showCommentByNewTime(String name) {
        Iterable<Comment> comments;
        if (name == null) {
            comments = commentService.showCommentByNewTime();
        } else {
            comments = commentService.findAllByContentContaining(name);
        }
        return new ResponseEntity<>(comments, HttpStatus.OK);
    }

    @GetMapping("/showCommentByOldTime")
    public ResponseEntity<Iterable<Comment>> showCommentByOldTime(String name) {
        Iterable<Comment> comments;
        if (name == null) {
            comments = commentService.showCommentByOldTime();
        } else {
            comments = commentService.findAllByContentContaining(name);
        }
        return new ResponseEntity<>(comments, HttpStatus.OK);
    }

    @GetMapping("/search/{content}")
    public ResponseEntity<Iterable<Comment>> findByContentContaining(@PathVariable String content) {
        Iterable<Comment> comments;
        if (content == null) {
            comments = commentService.findAll();
        } else {
            comments = commentService.findAllByContentContaining(content);
        }
        return new ResponseEntity<>(comments, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Comment> findCommentById(@PathVariable Long id) {
        Optional<Comment> comment = commentService.findById(id);
        if (!comment.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(comment.get(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Comment> saveComment(@PathVariable Long id, @RequestBody Comment comment) {
        LocalDateTime time = LocalDateTime.now();
        comment.setTime(time);
        Optional<User> userOptional = userService.findById(id);
        comment.setUser(userOptional.get());
        commentService.save(comment);
        return new ResponseEntity<>(comment, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Comment> edit(@PathVariable Long id, @RequestBody Comment comment) {
        Optional<Comment> commentOptional = commentService.findById(id);
        comment.setId(commentOptional.get().getId());
        commentService.save(comment);
        return new ResponseEntity<>(comment, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Comment> deleteComment(@PathVariable Long id) {
        Optional<Comment> commentOptional = commentService.findById(id);
        if (!commentOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        commentService.remove(id);
        return new ResponseEntity<>(commentOptional.get(), HttpStatus.OK);
    }
}
