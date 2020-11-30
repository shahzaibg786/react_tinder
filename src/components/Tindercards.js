import React, {useState} from 'react';
import './Tindercard.css';
import TinderCard from "react-tinder-card";

function Tindercards() {
    const [people,setPeople] = useState(
        [
            {
                name: 'Shahzaib',
                url: 'https://scontent.flhe2-2.fna.fbcdn.net/v/t1.0-9/120079265_1247936442222313_994048301499759733_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeH-FATjT-ms2qdlmHptllceGWgkVkKThRYZaCRWQpOFFoOSNHeZfJK6PpG6uKfLgGm9MUeCPAUtKP5CPEAJ73tS&_nc_ohc=pj2JvbXrzRQAX-yAVV0&_nc_ht=scontent.flhe2-2.fna&oh=e3a4f270927396f74392a926329932ae&oe=5FCE571B'
            },
            {
                name: 'Jeff Bezos',
                url: 'https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg'
            },
            {
                name: 'Jacinda Ardern',
                url: 'https://scontent.flhe2-2.fna.fbcdn.net/v/t1.0-9/121314527_10157393306117441_5188626790510616389_o.jpg?_nc_cat=1&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFjjuyrS-xlOfSOCwnXv3pnr1-kCTkyy4yvX6QJOTLLjII2PphI36FqyLDIH29iXJjDQcXAZaktZFoY2TUy7ofn&_nc_ohc=kdJAXhXcMB8AX_B-WcY&_nc_ht=scontent.flhe2-2.fna&oh=87594d30edd1421b3b03d40542e67c99&oe=5FCE4C3B'
            },
            {
                name: 'Joe Biden',
                url: 'https://www.inquirer.com/resizer/_1KdmIyXQlCOfDF6UE35BmBooME=/1400x932/smart/cloudfront-us-east-1.images.arcpublishing.com/pmn/XVHVQ7J6OJCO3MDQZZK6UWVW3Y.jpg'
            },
            {
                name: 'Arshad Mahmood',
                url: 'https://scontent.flhe2-1.fna.fbcdn.net/v/t1.0-9/1959297_343211425876900_3613236413935750527_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEGRLSsalveaInsjUod0t4SDcAE80jLusMNwATzSMu6w-UFx_r3wSbCMdxlQ2mwMUdhdZkkPfwEOOx05YVjcoo-&_nc_ohc=TiVtA_dVFmEAX-GR9TV&_nc_ht=scontent.flhe2-1.fna&oh=7c0d57281b7437525abedb8450d9de76&oe=5FCC5F67'
            },
            {
                name: 'Zain Sikander',
                url: 'https://scontent.flhe2-2.fna.fbcdn.net/v/t1.0-9/120079265_1247936442222313_994048301499759733_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeH-FATjT-ms2qdlmHptllceGWgkVkKThRYZaCRWQpOFFoOSNHeZfJK6PpG6uKfLgGm9MUeCPAUtKP5CPEAJ73tS&_nc_ohc=pj2JvbXrzRQAX-yAVV0&_nc_ht=scontent.flhe2-2.fna&oh=e3a4f270927396f74392a926329932ae&oe=5FCE571B'
            }  
        ]
    );
    const swiped = (direction, nameToDelete)=>{
        console.log('removing:' + nameToDelete);
        // setLastDirection(direction);

    };
    const outofFrame = (name) =>{
            console.log(name + 'left the screen!')
    }
    return (
        <div className="tinderCards">
            <div className = "tinderCards__cardContainer">
                {people.map((person) =>(

                    <TinderCard
                    className = "swipe"
                    key={person.name}
                    preventSwipe={['up','down']}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen = {() => outofFrame(person.name)}
                    >

                    <div
                    style = {{backgroundImage:`url(${person.url})`}}
                    className = "card"
                    >
                    <h3>{person.name}</h3>
                    </div>
                    </TinderCard>
                )

                )}
            </div>
        </div>
    )
}

export default Tindercards
