package com.example.demo.controller;

import com.example.demo.model.*;
import com.example.demo.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@RestController
@CrossOrigin("*")
@PropertySource("classpath:application.properties")
@RequestMapping("/api/admins")
public class AdminRestController {

    @Autowired
    private UserService userService;

    @Autowired
    private CommentServiceImpl commentService;

    @Autowired
    private HomeServiceImpl homeService;

    @Autowired
    private OrderServiceImpl orderService;

    @GetMapping("/findAllComment")
    public ResponseEntity<Iterable<Comment>> findAllComment() {
        Iterable<Comment> comments = commentService.findAll();
        return new ResponseEntity<>(comments, HttpStatus.OK);
    }
    @GetMapping("findComment/{id}")
    public ResponseEntity<Comment> findCommentById(@PathVariable Long id) {
        Optional<Comment> comment = commentService.findById(id);
        if (!comment.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(comment.get(), HttpStatus.OK);
    }

    @GetMapping("/findAllHome")
    public ResponseEntity<Iterable<Home>> findAllHome() {
        Iterable<Home> homes = homeService.findAll();
        return new ResponseEntity<>(homes, HttpStatus.OK);
    }
    @GetMapping("/findHome/{id}")
    public ResponseEntity<Home> findHomeById(@PathVariable Long id) {
        Optional<Home> home = homeService.findById(id);
        if (!home.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(home.get(), HttpStatus.OK);
    }

    @GetMapping("/findAllOrder")
    public ResponseEntity<Iterable<Order>> findAllOrder() {
        Iterable<Order> orders = orderService.findAll();
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }
    @GetMapping("/findOrder/{id}")
    public ResponseEntity<Order> findOrderById(@PathVariable Long id) {
        Optional<Order> order = orderService.findById(id);
        if (!order.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(order.get(), HttpStatus.OK);
    }

    @DeleteMapping("/admin/{idAdmin}/user/{idUser}")
    public ResponseEntity deleteUser(@PathVariable Long idAdmin, @PathVariable Long idUser) {
        Optional<User> adminOptional = userService.findById(idAdmin);
        boolean check = adminOptional.isPresent();
        if (check == true) {
            User user = userService.findById(idUser).get();
            user.setStatus(0);
            userService.save(user);
            return new ResponseEntity(user, HttpStatus.OK);
        }
        return new ResponseEntity(adminOptional, HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/admin/{idAdmin}/comment/{idComment}")
    public ResponseEntity deleteComment(@PathVariable Long idAdmin, @PathVariable Long idComment) {
        Optional<User> adminOptional = userService.findById(idAdmin);
        boolean check = adminOptional.isPresent();
        if (check == true) {
            Comment comment = commentService.findById(idComment).get();
            commentService.remove(idComment);
            return new ResponseEntity(comment, HttpStatus.OK);
        }
        return new ResponseEntity(adminOptional, HttpStatus.NOT_FOUND);
    }
}

