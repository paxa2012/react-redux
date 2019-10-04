import React from 'react';
import { Photoload } from '../actions';
import { Link } from 'react-router-dom';
import { setAccessTokenUnplash, listPhoto } from '../unsplash';
import { connect } from 'react-redux';
import Photo from '../components/allphoto';


class Auth extends React.Component{
    constructor(props){
        super(props);
        this.Photoload = this.Photoload.bind(this);
       

        if (localStorage.getItem('token') === 'undefined' || localStorage.getItem('token') === '' || !localStorage.getItem('token'))
            this.setAccessToken();        
    }

    setAccessToken() {
        const code = location.search.split('code=')[1];
        

        if (code) {
            setAccessTokenUnplash(code);
            
        }
    }

    Photoload(){
        let start = window.localStorage.getItem('start');
        let end = window.localStorage.getItem('end');
        
        const data = listPhoto(+start, +end, localStorage.getItem('token'))
        data.then(d => this.props.Photoload(d));
    
        
        window.localStorage.setItem('start', +start + 10);

    }
    componentDidMount() {
        this.Photoload();
    }
   

    render(){
        return(
            <main>
            <div className="container">
                <div className='row'>
                    <div className='col-3'>
                        <div className='main_header'>
                        <Link to='/auth'>
                            <svg width="220" height="54" viewBox="0 0 220 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.33876 8.14202H22.0598V0.600037H0V53.3933H8.33876V31.5971H19.1034V24.0554H8.33876V8.14202Z" fill="black"/>
                                <path d="M33.7291 12.7458C33.7291 8.97485 35.397 7.54198 38.0502 7.54198C40.7036 7.54198 42.3712 8.97485 42.3712 12.7458V41.2542C42.3712 45.0251 40.7036 46.4583 38.0502 46.4583C35.397 46.4583 33.7291 45.0251 33.7291 41.2542V12.7458ZM25.3904 40.7262C25.3904 49.1732 29.8631 54 38.0502 54C46.2376 54 50.71 49.1732 50.71 40.7262V13.2738C50.71 4.82682 46.2376 0 38.0502 0C29.8631 0 25.3904 4.82682 25.3904 13.2738V40.7262Z" fill="black"/>
                                <path d="M53.6756 8.14202H62.3936V53.3933H70.7324V8.14202H79.4501V0.600037H53.6756V8.14202Z" fill="black"/>
                                <path d="M125.761 53.3933H147.821V45.8514H134.1V0.600037H125.761V53.3933Z" fill="black"/>
                                <path d="M159.807 0.600037H151.468V53.3933H159.807V0.600037Z" fill="black"/>
                                <path d="M184.894 53.3933H193.46L181.862 24.1307L193.46 0.600037H185.122L174.357 23.4519H174.205V0.600037H165.867V53.3933H174.205V37.1783L176.783 32.3514L184.894 53.3933Z" fill="black"/>
                                <path d="M205.597 8.14202H220V0.600037H197.258V53.3933H220V45.8514H205.597V30.3904H217.044V22.8487H205.597V8.14202Z" fill="black"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M99.2527 0C114.064 0 126.088 11.9632 126.088 26.6984C126.088 41.4336 114.064 53.3968 99.2527 53.3968C84.4416 53.3968 72.4169 41.4336 72.4169 26.6984C72.4169 11.9632 84.4416 0 99.2527 0ZM99.2527 4.19338C111.737 4.19338 121.874 14.2775 121.874 26.6984C121.874 39.1193 111.737 49.2034 99.2527 49.2034C86.7679 49.2034 76.6318 39.1193 76.6318 26.6984C76.6318 14.2775 86.7679 4.19338 99.2527 4.19338Z" fill="black"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M93.5106 6.72009C101.275 6.72009 107.578 12.9915 107.578 20.7158C107.578 28.4402 101.275 34.7114 93.5106 34.7114C85.7464 34.7114 79.443 28.4402 79.443 20.7158C79.443 12.9915 85.7464 6.72009 93.5106 6.72009ZM93.5106 8.91825C100.055 8.91825 105.369 14.2047 105.369 20.7158C105.369 27.2271 100.055 32.5133 93.5106 32.5133C86.9658 32.5133 81.6524 27.2271 81.6524 20.7158C81.6524 14.2047 86.9658 8.91825 93.5106 8.91825Z" fill="black"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M96.3333 3.91507C107.203 3.91507 116.028 12.6948 116.028 23.509C116.028 34.3232 107.203 43.1029 96.3333 43.1029C85.4635 43.1029 76.6385 34.3232 76.6385 23.509C76.6385 12.6948 85.4635 3.91507 96.3333 3.91507ZM96.3333 6.99271C105.496 6.99271 112.935 14.3933 112.935 23.509C112.935 32.6246 105.496 40.0255 96.3333 40.0255C87.1707 40.0255 79.7317 32.6246 79.7317 23.509C79.7317 14.3933 87.1707 6.99271 96.3333 6.99271Z" fill="black"/>
                            </svg>
                        </Link>
                        </div>
                    </div>
                    <div className='col'>
                            <div className="search">
                                <span className="fas fa-search"></span>
                                <input className="input_s" type="search" placeholder="Поиск по сайту(добавлен исключительно по дизайну, поиск не работаеR"/>
                                <div className="join">
                                    <a href="https://unsplash.com/join" target="_blank">Join free</a>
                                </div>
                            </div>
                        </div>
                        
                </div>
                <div className="row">
                    
                        {
                            
                           this.props.photos.map( (photo, index ) => {
                               return  <Photo key={index} photo={photo} index={index} />
                             })
                             
                        }
                      

                </div>
                <div className="row">
                    <div className='col'>
                        <div className='downlodmore' title="Загрузить еще">
                            <svg onClick={this.Photoload} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M20.0001 0C31.0384 0 40 8.96174 40 20C40 31.0383 31.0384 40 20.0001 40C8.96179 40 0 31.0383 0 20C0 8.96174 8.96179 0 20.0001 0ZM20.0001 3.1413C29.3047 3.1413 36.8589 10.6954 36.8589 20C36.8589 29.3046 29.3047 36.8587 20.0001 36.8587C10.6955 36.8587 3.14131 29.3046 3.14131 20C3.14131 10.6954 10.6955 3.1413 20.0001 3.1413Z" fill="black"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.7208 5.03412C21.5073 5.03412 26.2052 9.73212 26.2052 15.5184C26.2052 21.3049 21.5073 26.0027 15.7208 26.0027C9.93433 26.0027 5.23652 21.3049 5.23652 15.5184C5.23652 9.73212 9.93433 5.03412 15.7208 5.03412ZM15.7208 6.68078C20.5984 6.68078 24.5585 10.6409 24.5585 15.5184C24.5585 20.3961 20.5984 24.356 15.7208 24.356C10.8431 24.356 6.88319 20.3961 6.88319 15.5184C6.88319 10.6409 10.8431 6.68078 15.7208 6.68078Z" fill="black"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.8244 2.93274C25.9255 2.93274 32.5025 9.50973 32.5025 17.6107C32.5025 25.7117 25.9255 32.2887 17.8244 32.2887C9.72341 32.2887 3.14639 25.7117 3.14639 17.6107C3.14639 9.50973 9.72341 2.93274 17.8244 2.93274ZM17.8244 5.23823C24.6531 5.23823 30.1972 10.7821 30.1972 17.6107C30.1972 24.4393 24.6531 29.9834 17.8244 29.9834C10.9958 29.9834 5.45168 24.4393 5.45168 17.6107C5.45168 10.7821 10.9958 5.23823 17.8244 5.23823Z" fill="black"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        );
    }
}
function mapStateToProps(state) {
   //console.log(state)
    return {
        
        photos: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        Photoload: (photos) => dispatch(Photoload(photos))
    }
} 

Auth = connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);
export default Auth