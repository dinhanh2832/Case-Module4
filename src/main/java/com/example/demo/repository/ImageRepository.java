package com.example.demo.repository;

import com.example.demo.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {
    @Modifying
    @Query(value = "select * from image where status = 1 and home_id = :idH",nativeQuery = true)
    Iterable<Image> findImgByIdHome(@Param("idH") Long idH);
    @Modifying
    @Query(value = "select * from image where home_id = :idH",nativeQuery = true)
    Iterable<Image> findAllImgByIdHome(@Param("idH") Long idH);
}
