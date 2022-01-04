package com.example.demo.controller;

import com.example.demo.model.Home;
import com.example.demo.model.StatusHome;
import com.example.demo.service.HomeServiceImpl;
import com.example.demo.service.StatusHomeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("")
    public ResponseEntity<Iterable<Home>> findAllHome() {
        Iterable<Home> homes = homeService.findAll();
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

    //    Search by address
    @GetMapping("/search/address")
    public ResponseEntity<Iterable<Home>> findByAddress(String address) {
        Iterable<Home> homes = homeService.findAllByAddressByStatus(address);
        if (homes == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(homes, HttpStatus.OK);
    }
}
