import React, { useRef, useState } from "react";
import { useSession } from "next-auth/client";
import Image from "next/image";
import OptionItems from "./OptionItems";
import {
  EmojiHappyIcon,
  PhotographIcon,
  VideoCameraIcon,
  XIcon,
} from "@heroicons/react/solid";
import ModalInputBox from "./ModalInputBox";
import { db, storage } from "../../firebase";
import firebase from "firebase";

function CreateStory() {
  const [session] = useSession();
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  // if(modal) {
  //   document.body.classList.add('active-modal')
  // } else {
  //   document.body.classList.remove('active-modal')
  // }
  const inputRef = useRef(null);
  const filepickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  // Create text for Post to firesore
  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    db.collection("post")
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`post/${doc.id}`)
            .putString(imageToPost, "data_url");
          removeImage();
          uploadTask.on(
            "state_change",
            null,
            (error) => console.error(error),
            () => {
              //When the upload completed
              storage
                .ref("post")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("post").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });
    inputRef.current.value = "";
  };
  // upload photo to firestore
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };
  //remove image when uploaded
  const removeImage = () => {
    setImageToPost(null);
  };
  return (
    <>
      <div className="bg-white dark:bg-[#242526] dark:border-[#242526] border border-gray-200 shadow rounded-xl p-3 space-y-3">
        <div className="flex space-x-3">
          <div className="dark:border-[#242526] h-10 w-10 relative rounded-full border hover:brightness-75 transition ease-in-out duration-300 cursor-pointer">
            <Image
              src={session.user.image}
              alt="image"
              loading="eager"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div
            onClick={toggleModal}
            className="bg-gray-100 dark:bg-[#3a3b3c]   h-10 rounded-full flex-grow items-center flex cursor-pointer hover:bg-gray-200 transition ease-in-out duration-300"
          >
            <h1 className="pl-3 text-sm text-gray-600 dark:text-[#e4e6eb]">
              What on your mind, {session.user.name}?
            </h1>
          </div>
        </div>
        <hr className="dark:border-[#3a3b3c]" />
        <div className="flex justify-evenly">
          <OptionItems
            Icon={VideoCameraIcon}
            title="Live Video"
            color="#FA383E"
          />
          <OptionItems
            onClick={() => filepickerRef.current.click()}
            src={imageToPost}
            imageToPost={imageToPost}
            Icon={PhotographIcon}
            title="Photo/Video"
            color="#00A400"
          />
          <OptionItems
            Icon={EmojiHappyIcon}
            title="Feeling/Activity"
            color="FBCCD2"
          />
        </div>
      </div>
      {modal && (
        <ModalInputBox
          inputRef={inputRef}
          onClick={sendPost}
          modal={modal}
          onClose={toggleModal}
          imageToPost={imageToPost}
          src={imageToPost}
          removeImage={removeImage}
          filepickerRef={filepickerRef}
          addImageToPost={addImageToPost}
        />
      )}
    </>
  );
}

export default CreateStory;
