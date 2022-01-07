package com.example.demo.controller;

import com.example.demo.model.Home;
import com.example.demo.model.HomeTime;
import com.example.demo.service.HomeTimeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/homeTimes")
public class HomeTimeRestController {

    @Autowired
    private HomeTimeServiceImpl homeTimeService;

    @GetMapping("")
    public ResponseEntity<Iterable<HomeTime>> listAllHomeTime() {
        Iterable<HomeTime> homeTimes = homeTimeService.findAll();
        if (homeTimes == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(homeTimes, HttpStatus.OK);

    }

    @GetMapping(value = "/getHomeTimes/{id}")
    public ResponseEntity<HomeTime> getHome(@PathVariable("id") Date id) {
        HomeTime homeTime = homeTimeService.findById(id);
        if (homeTime == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(homeTime, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Void> createHomeTime(@RequestBody HomeTime homeTime) {
        homeTimeService.save(homeTime);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<HomeTime> updateHomeTime(@PathVariable("id") Date id, @RequestBody HomeTime homeTime) {
        HomeTime homeTime1 = homeTimeService.findById(id);

        if (homeTime1 == null) {
            return new ResponseEntity<HomeTime>(HttpStatus.NOT_FOUND);
        }
        homeTime1.setHome(homeTime.getHome());
        homeTime1.setStatus(homeTime.getStatus());

        homeTimeService.save(homeTime1);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<HomeTime> deleteHouseDay(@PathVariable("id") Date id) {
        HomeTime homeTime = homeTimeService.findById(id);
        if (homeTime == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        homeTimeService.remove(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/searchByHome/{id}")
    public ResponseEntity<List<HomeTime>> findByHomeId(@PathVariable("id") long id) {
        List<HomeTime> homeTimes = homeTimeService.findAllByHome_Id(id);
        if (homeTimes == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(homeTimes, HttpStatus.OK);
    }
}
