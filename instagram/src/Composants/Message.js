function Message(props) {
    
    const [publi]= [props.publi];

    return (
      <div className="container-fluid text-start ps-2 pt-4 border-end h-100">
        <div className="row">
            <div className="offset-xl-2">
                {publi.map((pub) => (
                <>
                    {pub.comm1}<br/>{pub.comm2}<br/>
                </>
                ))}
            </div>
        </div>
      </div>
    );
  }
  
  export default Message;