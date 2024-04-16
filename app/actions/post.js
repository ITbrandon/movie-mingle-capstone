"use server"

import { prisma } from '../../lib/db'

export async function getPosts() {
  try {
  const posts = await prisma.post.findMany();
  return posts.reverse();
  }

  catch(error) {
    console.error(error)
  }
}

export async function getPost(id) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id
      },
    });
    return post;
  }

  catch(error) {
    console.error(error)
  }
}

export async function getUserPosts(userId) {
  try {
    const post = await prisma.post.findMany({
      where: {
        userId,
      },
    });
    return post.reverse();
  } 
  
  catch (error) {
    console.error(error);
  }
}

export async function createPost(data) {
  try {
    const post = await prisma.post.create({
      data: {
        ...data
      }
    });
    return post;  
  } 
  
  catch (error) {
    console.error(error);
  }
}

export async function updatePost(id, data) {
  try {
    const post = await prisma.post.update({
      where: {
        id
      },
      data: {
        ...data
      },
    });
    return post;
  }

  catch (error) {
    console.error(error);
  }
}

export async function deletePost(id) {
  try {
    const post = await prisma.post.delete({
      where: {
        id
      },
    });
    return post;
  } 
  
  catch (error) {
    console.error(error);
  }
}