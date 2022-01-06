package com.example.demo.controller;

import com.example.demo.model.HomeTime;
import com.example.demo.model.Order;
import com.example.demo.service.HomeTimeServiceImpl;
import com.example.demo.service.OrderServiceImpl;
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
    @Autowired
    private HomeTimeServiceImpl homeTimeService;
    private long oneDay = 86400000;

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
        orderService.save(order);
        long startDate = order.getStartDate().getTime();
        long endDate = order.getEndDate().getTime();

        for (long i = startDate; i <= endDate; i += oneDay) {
            Date date1 = new Date(i);
            homeTimeService.save(new HomeTime(date1, order.getHome(),"1"));
        }
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
