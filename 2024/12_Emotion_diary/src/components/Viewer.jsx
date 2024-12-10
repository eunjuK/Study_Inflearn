import "./Viewer.css";
import { getEmotionImage } from "../util/get-emotion-image";
import { emotionList } from "../util/constants";

const Viewer = ({ emotionId, content}) => {  
  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  );

  return (
    <div className="viewer">
      <section className="img_section">
        <h2>오늘의 감정</h2>
        <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
          <img src={getEmotionImage(emotionId)} alt="" />
          <p>{emotionItem.emotionName}</p>
        </div>
      </section>
      <section className="cxontent_section">
        <h2>오늘의 일기</h2>
        <div className="content_wrapper">
          <p>{content}</p>
        </div>
      </section>
    </div>
  )
}

export default Viewer;