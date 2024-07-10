import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let {title, description,imgUrl,newsUrl,date,author,nameSource } = this.props;
    return (
      
      <div>
        <div className="card" style={{width: "20rem"}}>
            <img src={imgUrl?imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsM_TgSviLTdeKaJkrLmYg1Cl-P23-QxHdoQ&s"} style={{width: "18rem", height:"12rem", alignSelf: "center", marginTop:'15px' }} className="card-img text-center" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text"><small className="text-body-secondary">{new Date(date).toGMTString()}</small></p>
                {/* <p>{date} - {time}</p> */}
                <p> {author && `By - ${author}`} </p>
                <p> {nameSource && `At - ${nameSource}`}</p>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
