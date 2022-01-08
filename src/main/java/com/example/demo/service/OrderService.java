package com.example.demo.service;

import com.example.demo.model.Order;

import java.util.Optional;

public interface OrderService extends GeneralService<Order> {
    Optional<Order> findByHome_Id(Long id);
}
