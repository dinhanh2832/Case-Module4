package com.example.demo.controller;

import com.example.demo.model.*;
import com.example.demo.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.Calendar;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@PropertySource("classpath:application.properties")
@RequestMapping("/api/orders")
public class OrderRestController {
    @Autowired
    private OrderServiceImpl orderService;

    @GetMapping("")
    public ResponseEntity<Iterable<Order>> findAllOrder() {
        Iterable<Order> orders = orderService.findAll();
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> findOrderById(@PathVariable Long id) {
        Optional<Order> order = orderService.findById(id);
        if (!order.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(order.get(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Order> saveOrder(@RequestBody Order order) {
        Date date = new Date(Calendar.getInstance().getTime().getTime());
        order.setBookingDate(date);
        order.setEndDate(null);
        orderService.save(order);
        return new ResponseEntity<>(order, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Order> editOrder(@PathVariable Long id, @RequestBody Order order) {
        Optional<Order> optionalOrder = orderService.findById(id);
        Date date = new Date(Calendar.getInstance().getTime().getTime());
        order.setStartDate(date);
        order.setId(optionalOrder.get().getId());
        orderService.save(order);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Order> deleteOrder(@PathVariable Long id) {
        Date date = new Date(Calendar.getInstance().getTime().getTime());
        Optional<Order> optionalOrder = orderService.findById(id);
        if (!optionalOrder.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        optionalOrder.get().setEndDate(date);
        orderService.save(optionalOrder.get());
        return new ResponseEntity<>(optionalOrder.get(), HttpStatus.OK);
    }
}
