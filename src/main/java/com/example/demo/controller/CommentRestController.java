package com.example.demo.controller;

import com.example.demo.model.*;
import com.example.demo.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    @Autowired
    private HomeServiceImpl homeService;

    @GetMapping("")
    public ResponseEntity<Iterable<Comment>> findAllComment(Long idH) {
        Iterable<Comment> comments = commentService.showCommentByNewTime(idH);
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
    @PostMapping("")
    public ResponseEntity<Comment> saveComment(@RequestBody Comment comment) {
        LocalDateTime time = LocalDateTime.now();
        Comment comment1 = new Comment(comment.getContent(),time,comment.getHome(),comment.getUser());
        commentService.save(comment1);
        return new ResponseEntity<>(comment1, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Comment> editComment(@PathVariable Long id, @RequestBody Comment comment) {
        Optional<Comment> commentOptional = commentService.findById(id);
        LocalDateTime time = LocalDateTime.now();
        comment.setId(commentOptional.get().getId());
        comment.setTime(time);
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
