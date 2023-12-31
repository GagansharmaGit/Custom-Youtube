import React from 'react'


const commentsData = [
    {
      name: "Gagan Sharma",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Gagan",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Sharma",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Gagan Sharma",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Gagan Sharma",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Gagan Sharma",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Gagan Sharma",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                        {
                          name: "Gagan Sharma",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "Gagan Sharma",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Sharma",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Gagan Sharma",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Gagan Sharma",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Gagan Sharma",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
];

const ShowAllComments = ({comment})=>{
    // console.log(comment);
    return( 
        comment.map((comme,index)=>{
                return( 
                   <div key={index}>
                         <Comm  data={comme}/>
                        <div className='pl-5 border border-l-black'>
                            <ShowAllComments   comment={comme.replies}/>
                        </div>
                   </div>
                )
        })
    )
}


const Comm = ({data})=>{
    const {name,text,replies} = data;
    return (
        <div className='flex shadow-sm bg-gray-100 rounded-lg my-2'>
            <img
                className="w-12 h-12"
                 src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" 
                 alt="user" 
            />

            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
};


const Comments = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold mb-5'>Comments </h1>
        <ShowAllComments comment = {commentsData} />
    </div>
  )
}

export default Comments;