package com.example.demo.service;

import com.example.demo.model.Comment;

import java.util.List;

public interface CommentService extends GeneralService<Comment> {
    List<Comment> findAllByContentContaining(String content);
    Iterable<Comment> showCommentByNewTime();
    Iterable<Comment> showCommentByOldTime();

}
