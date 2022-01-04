package com.example.demo.repository;

import com.example.demo.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findAllByContentContaining(String content);

    @Modifying
    @Query(value = "select * from comment order by time desc;", nativeQuery = true)
    Iterable<Comment> showCommentByNewTime();
}
