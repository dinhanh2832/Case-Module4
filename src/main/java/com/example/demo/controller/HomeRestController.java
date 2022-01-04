package com.example.demo.controller;

import com.example.demo.model.*;
import com.example.demo.service.*;
import jdk.net.SocketFlow;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@Controller
@CrossOrigin("*")
@PropertySource("classpath:application.properties")
@RequestMapping("/api/homes")
public class HomeRestController {
    @Autowired
    private HomeServiceImpl homeService;
    @Autowired
    private StatusHomeServiceImpl statusHomeService;
    @Autowired
    private CommentServiceImpl commentService;
    @Autowired
    private UserService userService;
    @Autowired
    private CategoryServiceImpl categoryService;

    @GetMapping("")
    public ResponseEntity<Iterable<Home>> findAllHome() {
        Iterable<Home> homes = homeService.findAll();
        return new ResponseEntity<>(homes, HttpStatus.OK);
    }

    @GetMapping("/MostRate")
    public ResponseEntity<Iterable<Home>> MostRate() {
        Iterable<Home> homes = homeService.findAllHomeMostRated();
        return new ResponseEntity<>(homes, HttpStatus.OK);
    }

    @GetMapping("/findAllCategory")
    public ResponseEntity<Iterable<Category>> findAllCategory() {
        Iterable<Category> categories = categoryService.findAll();
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }

    @GetMapping("/findHomeStatus1")
    public ResponseEntity<Iterable<Home>> findHomeByStatus1(String name) {
        Iterable<Home> homes;
        if (name == null) {
            homes = homeService.findAllByStatusLike1();
        } else {
            homes = homeService.findAllByNameContaining(name);
        }
        return new ResponseEntity<>(homes, HttpStatus.OK);
    }

    @GetMapping("/findHomeStatus2")
    public ResponseEntity<Iterable<Home>> findHomeByStatus2(String name) {
        Iterable<Home> homes;
        if (name == null) {
            homes = homeService.findAllByStatusLike2();
        } else {
            homes = homeService.findAllByNameContaining(name);
        }
        return new ResponseEntity<>(homes, HttpStatus.OK);
    }

    @GetMapping("/findHomeStatusUser")
    public ResponseEntity<Iterable<Home>> findHomeByStatusOfUser(@RequestParam Long id) {
        Iterable<Home> homes = homeService.findAllHomeByStatusOfUser(id);
        return new ResponseEntity<>(homes, HttpStatus.OK);
    }

    @GetMapping("/findAllStatus")
    public ResponseEntity<Iterable<StatusHome>> findAllStatus() {
        Iterable<StatusHome> statusHomes = statusHomeService.findAll();
        return new ResponseEntity<>(statusHomes, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Home> findHomeById(@PathVariable Long id) {
        Optional<Home> home = homeService.findById(id);
        if (!home.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(home.get(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Home> saveHome(@RequestBody Home home) {
        Optional<StatusHome> statusHome = statusHomeService.findById(2L);
        home.setStatusHome(statusHome.get());
        homeService.save(home);
        return new ResponseEntity<>(home, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Home> edit(@PathVariable Long id, @RequestBody Home home) {
        Optional<Home> homeOptional = homeService.findById(id);
        home.setId(homeOptional.get().getId());
        homeService.save(home);
        return new ResponseEntity<>(home, HttpStatus.OK);
    }

    @DeleteMapping("/change2/{id}")
    public ResponseEntity<Home> change2(@PathVariable Long id) {
        Optional<Home> homeOptional = homeService.findById(id);
        if (!homeOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Optional<StatusHome> statusHome = statusHomeService.findById(1L);
        homeOptional.get().setStatusHome(statusHome.get());
        homeService.save(homeOptional.get());
        return new ResponseEntity<>(homeOptional.get(), HttpStatus.OK);
    }

    @DeleteMapping("/change1/{id}")
    public ResponseEntity<Home> change1(@PathVariable Long id) {
        Optional<Home> homeOptional = homeService.findById(id);
        if (!homeOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Optional<StatusHome> statusHome = statusHomeService.findById(2L);
        homeOptional.get().setStatusHome(statusHome.get());
        homeService.save(homeOptional.get());
        return new ResponseEntity<>(homeOptional.get(), HttpStatus.OK);
    }

    @GetMapping("/search/{name}")
    public ResponseEntity<Iterable<Home>> findByNameContaining(@PathVariable String name) {
        Iterable<Home> homes;
        if (name == null) {
            homes = homeService.findAll();
        } else {
            homes = homeService.findAllByNameContaining(name);
        }
        return new ResponseEntity<>(homes, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Home> deleteHome(@PathVariable Long id) {
        Optional<Home> homeOptional = homeService.findById(id);
        if (!homeOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        homeService.delete(homeOptional.get());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //    Search by address and status = 1
    @GetMapping("/search/address")
    public ResponseEntity<Iterable<Home>> findByAddress(@RequestParam  String q) {
        Iterable<Home> homes = homeService.findAllByAddressContainingAndStatusHome(q);
        if (homes == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(homes, HttpStatus.OK);
    }
}
