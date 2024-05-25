import React, { useState } from "react";
import { ContentSection, NoticeInputForm, Noticestyle, PhotoSection, TitleSection } from "../../styles/notice/NoticeStyle";

const NoticePage = () => {
  // 이미지 업로드
  const [uploadImg, setUploadImg] = useState<string>(
    `${process.env.PUBLIC_URL}/images/notice/notice_img.svg`,
  );
  const [uploadImgFile, setUploadImgFile] = useState(null);

  const handleChangeFileOne = e => {
    const file = e.target.files[0];
    if (file) {
      // 미리보기
      const tempUrl = URL.createObjectURL(file);
      setUploadImg(tempUrl); // 미리보기 끝
      // FB 파일을 보관
      setUploadImgFile(file); // 파일 1개 추가 끝
    }
  };

  return (
    <>
      <Noticestyle>
        <h1>&nbsp;&nbsp;공지 등록</h1>
        <NoticeInputForm>
          <PhotoSection>
            <span>사진</span>
            <div>
              <label htmlFor="img">
                <button
                  type="button"
                  onClick={() => {
                    document.getElementById("img").click();
                  }}
                >
                  <img src={uploadImg} alt="" />
                </button>
              </label>
              <input
                type="file"
                // {...register("photo")}
                accept="image/png, image/gif, image/jpeg"
                onClick={() => {
                  document.getElementById("img").click();
                }}
                onChange={event => {
                  handleChangeFileOne(event);
                }}
                id="img"
                style={{ display: "none" }}
              />
            </div>
          </PhotoSection>
          <TitleSection>
            <span>제목</span>
            <input />
          </TitleSection>
          <ContentSection>
            <span>내용</span>
            <textarea />
          </ContentSection>
        </NoticeInputForm>
      </Noticestyle>
    </>
  );
};

export default NoticePage;
