package com.example.demo.repository;

import com.example.demo.model.Home;
import com.example.demo.model.StatusHome;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
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

    @Modifying
    @Query(value = "select * from home where status_id = 1 and user_id = :id", nativeQuery = true)
    Iterable<Home> findAllHomeByStatusOfUser(@Param("id") Long id);

    @Modifying
    @Query(value = "select * from home order by number_of_turns desc limit 5;", nativeQuery = true)
    Iterable<Home> findAllHomeMostRated();

    @Override
    void delete(Home entity);

    @Query("select h from Home h where h.address like concat('%', :address, '%') or h.bedroom = :bedroom and h.statusHome.id = 1")
    Iterable<Home> findAllByAddressContainingAndStatusHome(@Param("address") String address, @Param("bedroom") int bedroom);
}
