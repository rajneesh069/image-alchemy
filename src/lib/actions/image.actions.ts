"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "../database/mongoose";
import { handleError } from "../utils";
import User from "../database/models/user.model";
import Image from "../database/models/image.model";
import { redirect } from "next/navigation";


function populateUser(query : any){
    return query.populate({
        path : "author",
        model : User,
        select : "_id firstName lastName"
    })
}

// Add Image
export async function addImage({ image, userId, path }: AddImageParams) {
  try {
    await dbConnect();

    const author = await User.findById(userId);

    if (!author) {
      throw new Error("User not found.");
    }

    const newImage = await Image.create({
      ...image,
      author: author._id,
    });

    revalidatePath(path);

    return JSON.parse(JSON.stringify(newImage));
  } catch (error) {
    handleError(error);
  }
}
// Update Image
export async function updateImage({ image, userId, path }: UpdateImageParams) {
  try {
    await dbConnect();
    const imageToUpdate = await Image.findById(image._id);
    if (!imageToUpdate || imageToUpdate.author.toHexString() != userId) {
      throw new Error("Unauthorized or image not found");
    }

    const updatedImage = await Image.findByIdAndUpdate(
      imageToUpdate._id,
      image,
      { new: true }
    );

    revalidatePath(path);
    return JSON.parse(JSON.stringify(updatedImage));
  } catch (error) {
    handleError(error);
  }
}
// Delete Image
export async function deleteImage(imageId: string) {
  try {
    await dbConnect();
    await Image.findByIdAndDelete(imageId);

  } catch (error) {
    handleError(error);

  } finally {
    redirect("/");
  }
}
// Get Image by ID
export async function getImageByID(imageId: string) {
  try {
    await dbConnect();
    const image = await populateUser(Image.findById(imageId))
    if(!image){
        throw new Error("Image not found")
    }
    return JSON.parse(JSON.stringify(image));
  } catch (error) {
    handleError(error);
  }
}
