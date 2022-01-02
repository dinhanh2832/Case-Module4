package com.example.demo.controller;

import com.example.demo.model.Order;
import com.example.demo.service.OrderServiceImpl;
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
        orderService.save(order);
        return new ResponseEntity<>(order, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Order> edit(@PathVariable Long id, @RequestBody Order order) {
        Optional<Order> optionalOrder = orderService.findById(id);
        order.setId(optionalOrder.get().getId());
        orderService.save(order);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Order> delete(@PathVariable Long id) {
        Optional<Order> optionalOrder = orderService.findById(id);
        if (!optionalOrder.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        orderService.remove(id);
        return new ResponseEntity<>(optionalOrder.get(), HttpStatus.OK);
    }
}
