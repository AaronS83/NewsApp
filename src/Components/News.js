
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

  
  static defaultProps = {
    country: "in",
    pageSize: 18,
    category: "general"
  }
  
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  
  constructor (props){
    super(props);
    this.state = {
      articles : [],
      loading : true,
      page:1,
      totalRes:0,
      // pageSize:this.props.pageSize 
    }
    document.title = `NewsNetwork - ${this.capitalize(this.props.category)}`
  }
  
  updateNews = async ()=>{
    this.props.setProgress(0)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json();
    this.props.setProgress(60)
    // console.log(parsedData)
    // this.setState({loading:false})
    
    this.setState({
      articles: parsedData.articles, 
      totalRes : parsedData.totalResults,
      loading:false
    })
    this.props.setProgress(100)

  }
  async componentDidMount () {
    this.updateNews()
  }
  
  fetchMoreData = async () => {
    this.setState({page: this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
        articles: this.state.articles.concat(parsedData.articles), 
        totalRes : parsedData.totalResults,
      })
  };

  capitalize = (para)=>{
    return para.charAt(0).toUpperCase() + para.slice(1);
  }
  render() {
    return (
      <>
        <h2 className='text-center' style={{margin:"35px 0px"}} >{`NewsNetwork - Top ${this.capitalize(this.props.category)} Headlines `}</h2>
        {/* {this.state.loading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <=  this.state.totalRes}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row my-4">        
          {this.state.articles.map((element)=>{
          return <div className="col-md-4 my-3" key={element.url}>
              {/* We can use object destructuring to extract the url if we wanted to */}
              <NewsItem  title = {element.title?element.title.slice(0, 25):""} description = {element.description?element.description.slice(0, 90):""} imgUrl = {element.urlToImage} newsUrl = {element.url} date={element.publishedAt} author={element.author} nameSource={element.source.name}/>
            </div>
        })}
        </div>
        </div>
        </InfiniteScroll>

      </>
    )
  }
}

export default News

// _______________________________________________________________________________________________________________________

// Code that removes the news components that return title="[Removed]"

// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner'
// import PropTypes from 'prop-types'

// export class News extends Component {

//   static defaultProps = {
//     country: "in",
//     pageSize: 18,
//     category: "general"
//   }
  
//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string
//   }

//   constructor (){
//     super();
//     this.state = {
//       articles : [],
//       loading : false,
//       page:1,
//       totalRes:0,
//       // pageSize:this.props.pageSize 
//     }
// }



// async componentDidMount () {
//   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed55747a99704fe584d78424cec81f49&page=1&pageSize=${this.props.pageSize}`;
//   this.setState({loading:true})
//   let data = await fetch(url);
//   let parsedData = await data.json();
//   // console.log(parsedData)
//   // this.setState({loading:false})

//   this.setState({
//       articles: parsedData.articles.filter((element)=>{return element.title !== "[Removed]" }), 
//       totalRes : parsedData.totalResults,
//       loading:false
//     })
// }

//   handleNextClick = async ()=>{
//     if(!(this.state.page+1 > Math.ceil(this.state.totalRes/this.state.pageSize)))
//     {
//       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed55747a99704fe584d78424cec81f49&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
//       this.setState({loading:true})
//       let data = await fetch(url);
//       let parsedData = await data.json();
//       // console.log(parsedData)
//       // this.setState({loading:false})
//         this.setState({
//           articles: parsedData.articles.filter((element)=>{return element.title !== "[Removed]" }),
//           page: this.state.page+1,
//           loading:false
//         })
//     }
//   }

//   handlePrevClick = async ()=>{
    
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed55747a99704fe584d78424cec81f49&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
//     this.setState({loading:true})
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     // console.log(parsedData)
//     // this.setState({loading:false})
//       this.setState({
//         articles: parsedData.articles.filter((element)=>{return element.title !== "[Removed]" }),
//         page: this.state.page-1,
//         loading:false
//       })
//     }

//   render() {
//     return (
//       <div className='container my-3'>
//         <h2 className='text-center' style={{margin:"35px 0px"}} > News Network - Top Headlines</h2>
//         {this.state.loading && <Spinner/>}
//         <div className="row my-4">
//         {!this.state.loading && this.state.articles.map((element)=>{
//           return <div className="col-md-4 my-3" key={element.url}>
//               {/* We can use object destructuring to extract the url if we wanted to */}
//               <NewsItem  title = {element.title?element.title.slice(0, 25):""} description = {element.description?element.description.slice(0, 90):""} imgUrl = {element.urlToImage} newsUrl = {element.url} date={element.publishedAt} author={element.author} nameSource={element.source.name}/>
//             </div>
//         })}
//         </div>

//         <div className="container d-flex justify-content-between">
//             <button disabled={this.state.page<=1} onClick={this.handlePrevClick} type="button" className="btn btn-next btn-dark">&larr; Previous</button>
//             <button disabled={this.state.page+1 > Math.ceil(this.state.totalRes/this.state.pageSize)} onClick={this.handleNextClick} type="button" className="btn btn-dark"> Next &rarr;</button>
//           </div>
//       </div>
//     )
//   }
// }

// export default News
// __________________________________________________________________________________________________________________________________________________________________________

// React news component without the scroll wheel, it has the default prev and next buttons

// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner'
// import PropTypes from 'prop-types'

// export class News extends Component {

//   static defaultProps = {
//     country: "in",
//     pageSize: 18,
//     category: "general"
//   }
  
//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string
//   }

//   constructor (props){
//     super(props);
//     this.state = {
//       articles : [],
//       loading : false,
//       page:1,
//       totalRes:0,
//       // pageSize:this.props.pageSize 
//     }
//     document.title = `NewsNetwork - ${this.capitalize(this.props.category)}`
// }

// updateNews = async ()=>{
//   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed55747a99704fe584d78424cec81f49&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//   this.setState({loading:true})
//   let data = await fetch(url);
//   let parsedData = await data.json();

//   // console.log(parsedData)
//   // this.setState({loading:false})

//   this.setState({
//       articles: parsedData.articles, 
//       totalRes : parsedData.totalResults,
//       loading:false
//     })
// }
// async componentDidMount () {
//   this.updateNews()
// }

//   handleNextClick = async ()=>{
//         this.setState({page: this.state.page+1});
//         this.updateNews()
//   }

//   handlePrevClick = async ()=>{
//         this.setState({page: this.state.page-1});
//         this.updateNews()
//     }

//     capitalize = (para)=>{
//       return para.charAt(0).toUpperCase() + para.slice(1);
//     }
//   render() {
//     return (
//       <div className='container my-3'>
//         <h2 className='text-center' style={{margin:"35px 0px"}} >{`NewsNetwork - Top ${this.capitalize(this.props.category)} Headlines `}</h2>
//         {this.state.loading && <Spinner/>}
//         <div className="row my-4">
//         {!this.state.loading && this.state.articles.map((element)=>{
//           return <div className="col-md-4 my-3" key={element.url}>
//               {/* We can use object destructuring to extract the url if we wanted to */}
//               <NewsItem  title = {element.title?element.title.slice(0, 25):""} description = {element.description?element.description.slice(0, 90):""} imgUrl = {element.urlToImage} newsUrl = {element.url} date={element.publishedAt} author={element.author} nameSource={element.source.name}/>
//             </div>
//         })}
//         </div>

//         <div className="container d-flex justify-content-between">
//             <button disabled={this.state.page<=1} onClick={this.handlePrevClick} type="button" className="btn btn-next btn-dark">&larr; Previous</button>
//             <button disabled={this.state.page+1 > Math.ceil(this.state.totalRes/this.props.pageSize)} onClick={this.handleNextClick} type="button" className="btn btn-dark"> Next &rarr;</button>
//           </div>
//       </div>
//     )
//   }
// }

// export default News
//_____________________________________________________________________________________________________________________________

