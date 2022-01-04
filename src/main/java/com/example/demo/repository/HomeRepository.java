package com.example.demo.repository;

import com.example.demo.model.Home;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HomeRepository extends JpaRepository<Home, Long> {
    List<Home> findAllByNameContaining(String name);

    Iterable<Home> findAllByAddressContaining(String address);
    Iterable<Home> findAllByStatusHome(long id);
}
