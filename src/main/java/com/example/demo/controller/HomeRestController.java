package com.example.demo.controller;

import com.example.demo.model.Home;
import com.example.demo.service.HomeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/homes")
public class HomeRestController {
    @Autowired
    private HomeServiceImpl homeService;

    @GetMapping("")
    public ResponseEntity<Iterable<Home>> findAllHome() {
        Iterable<Home> homes = homeService.findAll();
        return new ResponseEntity<>(homes, HttpStatus.OK);
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
    public ResponseEntity<Home> saveOrder(@RequestBody Home home) {
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

    @DeleteMapping("/{id}")
    public ResponseEntity<Home> delete(@PathVariable Long id) {
        Optional<Home> homeOptional = homeService.findById(id);
        if (!homeOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        homeService.remove(id);
        return new ResponseEntity<>(homeOptional.get(), HttpStatus.OK);
    }
}
