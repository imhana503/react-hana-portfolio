import { project } from './../../data';
import './project.css';

const Project = () => {
  return(
    <div className="portfolio">
      {
        project.map((item)=>{
          return(
            <div className="portfolio__item" key={item.id}>
              <p className="thumb"><img src={item.thumb} alt={item.title} /></p>
              <ul className="text-info">
                <li className="text-info__category">{item.device}</li>
                <li className="text-info__title">{item.title}</li>
                <li>
                  {
                    item.work.map((it, idx)=>{
                      return <span className="text-info__work">{item.work[idx]}</span>
                    })
                  }
                </li>
                <li className="text-info__date">{item.date}</li>
                <li><a href={item.link} target="_blank" title="새창 열림">사이트 바로가기</a></li>
              </ul>
            </div>
          )
          
        })
      }

    </div>
  )
}

export default Project;