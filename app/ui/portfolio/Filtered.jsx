import { videos } from "../../../utils/constants";
import NewVideo from './NewVideo';

const Filtered = ({ category }) => {
  
    if (category === '') {
        return(
            videos.map((vid, index) => (
                <NewVideo key={index} title={vid.title} thumbnail={vid.thumbnail} src={vid.src} description={vid.description} alt={vid.thumbnailAltText} />
            ))
        )
    } else {
        let filtered = videos.filter((vid) => {return vid.category === category});
        return (
            filtered.map((video, index) => (
                <NewVideo key={index} title={video.title} thumbnail={video.thumbnail} src={video.src} description={video.description} alt={video.thumbnailAltText} />
            ))
        )
    }
}

export default Filtered