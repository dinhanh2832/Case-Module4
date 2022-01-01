package com.example.demo.controller;

import com.example.demo.model.Comment;
import com.example.demo.service.CommentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/comments")
public class CommentRestController {
    @Autowired
    private CommentServiceImpl commentService;

    @GetMapping("")
    public ResponseEntity<Iterable<Comment>> findAllComment() {
        Iterable<Comment> comments = commentService.findAll();
        return new ResponseEntity<>(comments, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Optional<Comment>> findOne(@PathVariable Long id) {
        Optional<Comment> comment = commentService.findById(id);
        return new ResponseEntity<>(comment, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Comment> deleteComment(@PathVariable Long id) {
        Optional<Comment> commentOptional = commentService.findById(id);
        if (!commentOptional.isPresent()) {
            return new ResponseEntity<>(commentOptional.get(), HttpStatus.NOT_FOUND);
        }
        commentService.remove(id);
        return new ResponseEntity<>(commentOptional.get(), HttpStatus.NO_CONTENT);
    }

    @PostMapping
    public ResponseEntity<Comment> saveComment(@RequestBody Comment comment) {
        LocalDateTime time = LocalDateTime.now();
        comment.setTime(time);
        commentService.save(comment);
        return new ResponseEntity<>(comment, HttpStatus.CREATED);
    }

}
