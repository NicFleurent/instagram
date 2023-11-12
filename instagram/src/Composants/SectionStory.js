import Story from './Story';

function SectionStory() {
    return (
      <div className="container-fluid mt-5 d-none d-xl-block">
          <div className="row text-center">
              <div className="col-2">
                    <Story
                        photo="/img/pp/moi.png"
                        user="nicF..." 
                    />
              </div>
              <div className="col-2">
                    <Story
                        photo="/img/pp/carlsen.webp"
                        user="soon..." 
                    />
              </div>
              <div className="col-2">
                    <Story
                        photo="/img/pp/oda.jpg"
                        user="odaT..." 
                    />
              </div>
              <div className="col-2">
                    <Story
                        photo="/img/pp/watson.jpg"
                        user="herm..." 
                    />
              </div>
              <div className="col-2">
                    <Story
                        photo="/img/pp/thunberg.webp"
                        user="peti..." 
                    />
              </div>
              <div className="col-2">
                    <Story
                        photo="/img/pp/juicy_fruit.png"
                        user="juic..." 
                    />
              </div>
          </div>
      </div>
    );
  }
  
  export default SectionStory;