package com.example.demo.repository;

import com.example.demo.model.Home;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HomeRepository extends JpaRepository<Home, Long> {

    List<Home> findAllByNameContaining(String name);

    @Modifying
    @Query(value = "select * from home where home.status_id like 1", nativeQuery = true)
    Iterable<Home> findAllByStatusLike1();
    @Modifying
    @Query(value = "select * from home where home.status_id like 2", nativeQuery = true)
    Iterable<Home> findAllByStatusLike2();

}
