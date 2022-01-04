package com.example.demo.service;

import com.example.demo.model.Home;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface HomeService extends GeneralService<Home>{
    List<Home> findAllByNameContaining(String name);
    Iterable<Home> findAllByStatusLike1();
    Iterable<Home> findAllByStatusLike2();
    Iterable<Home> findAllHomeByStatusOfUser(Long id);
    void delete(Home entity);
    Iterable<Home> findAllHomeMostRated();
    Iterable<Home> showHomeOrderByDESC();
    Iterable<Home> findAllByAddressContaining(String address);
}
