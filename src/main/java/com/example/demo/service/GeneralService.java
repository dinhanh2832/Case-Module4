package com.example.demo.service;

import java.util.Optional;

public interface GeneralService<T> {

    Iterable<T> findAll();

    Optional<T> findById(Long id);

    default void save(T t) {
    };

    default void remove(Long id) {
    };
}
