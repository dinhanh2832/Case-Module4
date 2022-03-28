package com.example.demo.service;

import com.example.demo.model.Comment;

import java.util.List;

public interface CommentService extends GeneralService<Comment> {
    List<Comment> findAllByContentContaining(String content);

    Iterable<Comment> showCommentByNewTime(Long idH);

    Iterable<Comment> showCommentByOldTime();

    Iterable<Comment> findCommentByHomeId(Long id);
}
