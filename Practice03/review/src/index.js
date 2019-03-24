import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const categoryIndex = [
    { category: 'Entertainment', url: "#" },
    { category: 'Photography', url: "#" },
    { category: 'Life', url:"#" }
];
const diary = [
    {   title: 'Lorem Ipsum', picture: require('./picture/19940118.jpg'),
        paragraph: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat tellus vel tellus pretium, vitae pulvinar velit luctus. Suspendisse sodales lectus tellus, ut facilisis nisl viverra vel. Quisque aliquet tortor ac congue dignissim. Suspendisse ac dui a elit placerat ornare. Phasellus auctor dapibus massa, sed dignissim enim tristique quis. Etiam aliquam tempus metus eu efficitur. Nam a neque eget augue mollis molestie. Maecenas pulvinar nisi id lorem congue eleifend. Cras lobortis ornare urna vitae tristique. Maecenas in mauris placerat dui gravida congue sed ut lectus. Curabitur hendrerit elementum eros. Fusce tincidunt egestas congue.",
                    "Fusce at consectetur ex, eget dapibus lacus. Praesent eget turpis quis orci convallis bibendum. Donec ac tincidunt magna, at consequat nibh. Mauris rhoncus interdum tempus. Aliquam erat volutpat. Quisque purus massa, imperdiet eget lectus eu, accumsan vehicula risus. Nullam ac scelerisque massa.",
                    "Phasellus eros lorem, efficitur sit amet egestas nec, gravida ut sem. In non elit elementum, dapibus ligula ornare, auctor diam. Praesent neque massa, suscipit ut hendrerit bibendum, interdum id augue. Vestibulum malesuada lorem at ligula maximus interdum. Morbi quis vestibulum orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam quis volutpat nulla. Integer id diam pretium, semper risus in, commodo ligula. Curabitur lacus arcu, tempor sit amet ipsum id, dignissim eleifend augue. Cras maximus convallis massa eget aliquam. Curabitur sed commodo enim. Duis aliquet, arcu eget vestibulum interdum, purus sapien hendrerit purus, sit amet congue mi quam ut lorem."],
        date: '2019.03.23 4:01 AM'},
    {   title: 'Lorem Ipsum1', picture: require('./picture/19960422.jpg'),
        paragraph: ["Hey there where ya goin', not exactly knowin', who says you have to call just one place home. He's goin' everywhere, B.J. McKay and his best friend Bear. He just keeps on movin', ladies keep improvin', every day is better than the last. New dreams and better scenes, and best of all I don't pay property tax. Rollin' down to Dallas, who's providin' my palace, off to New Orleans or who knows where. Places new and ladies, too, I'm B.J. McKay and this is my best friend Bear.",
                    "Ulysses, Ulysses - Soaring through all the galaxies. In search of Earth, flying in to the night. Ulysses, Ulysses - Fighting evil and tyranny, with all his power, and with all of his might. Ulysses - no-one else can do the things you do. Ulysses - like a bolt of thunder from the blue. Ulysses - always fighting all the evil forces bringing peace and justice to all.",
                    "Children of the sun, see your time has just begun, searching for your ways, through adventures every day. Every day and night, with the condor in flight, with all your friends in tow, you search for the Cities of Gold. Ah-ah-ah-ah-ah... wishing for The Cities of Gold. Ah-ah-ah-ah-ah... some day we will find The Cities of Gold. Do-do-do-do ah-ah-ah, do-do-do-do, Cities of Gold. Do-do-do-do, Cities of Gold. Ah-ah-ah-ah-ah... some day we will find The Cities of Gold."],
        date: '2019.03.23 4:10 AM'},
    {   title: 'Lorem Ipsum2', picture: require('./picture/19980321.jpg'),
        paragraph: ["I never spend much time in school but I taught ladies plenty. It's true I hire my body out for pay, hey hey. I've gotten burned over Cheryl Tiegs, blown up for Raquel Welch. But when I end up in the hay it's only hay, hey hey. I might jump an open drawbridge, or Tarzan from a vine. 'Cause I'm the unknown stuntman that makes Eastwood look so fine.",
                    "Children of the sun, see your time has just begun, searching for your ways, through adventures every day. Every day and night, with the condor in flight, with all your friends in tow, you search for the Cities of Gold. Ah-ah-ah-ah-ah... wishing for The Cities of Gold. Ah-ah-ah-ah-ah... some day we will find The Cities of Gold. Do-do-do-do ah-ah-ah, do-do-do-do, Cities of Gold. Do-do-do-do, Cities of Gold. Ah-ah-ah-ah-ah... some day we will find The Cities of Gold.",
                    "Ulysses, Ulysses - Soaring through all the galaxies. In search of Earth, flying in to the night. Ulysses, Ulysses - Fighting evil and tyranny, with all his power, and with all of his might. Ulysses - no-one else can do the things you do. Ulysses - like a bolt of thunder from the blue. Ulysses - always fighting all the evil forces bringing peace and justice to all."],
        date: '2019.03.23 4:11 AM'},
    {   title: 'Lorem Ipsum3', picture: require('./picture/19980623.jpg'),
        paragraph: ["There's a voice that keeps on calling me. Down the road, that's where I'll always be. Every stop I make, I make a new friend. Can't stay for long, just turn around and I'm gone again. Maybe tomorrow, I'll want to settle down, Until tomorrow, I'll just keep moving on.",
                    "Ten years ago a crack commando unit was sent to prison by a military court for a crime they didn't commit. These men promptly escaped from a maximum security stockade to the Los Angeles underground. Today, still wanted by the government, they survive as soldiers of fortune. If you have a problem and no one else can help, and if you can find them, maybe you can hire the A-team.",
                    "I never spend much time in school but I taught ladies plenty. It's true I hire my body out for pay, hey hey. I've gotten burned over Cheryl Tiegs, blown up for Raquel Welch. But when I end up in the hay it's only hay, hey hey. I might jump an open drawbridge, or Tarzan from a vine. 'Cause I'm the unknown stuntman that makes Eastwood look so fine."],
        date: '2019.03.23 4:12 AM'},
    {   title: 'Lorem Ipsum4', picture: require('./picture/19990202.jpg'),
        paragraph: ["Top Cat! The most effectual Top Cat! Who's intellectual close friends get to call him T.C., providing it's with dignity. Top Cat! The indisputable leader of the gang. He's the boss, he's a pip, he's the championship. He's the most tip top, Top Cat.",
                    "Hey there where ya goin', not exactly knowin', who says you have to call just one place home. He's goin' everywhere, B.J. McKay and his best friend Bear. He just keeps on movin', ladies keep improvin', every day is better than the last. New dreams and better scenes, and best of all I don't pay property tax. Rollin' down to Dallas, who's providin' my palace, off to New Orleans or who knows where. Places new and ladies, too, I'm B.J. McKay and this is my best friend Bear."],
        date: '2019.03.23 4:14 AM'},
]

ReactDOM.render(<App categoryIndex = {categoryIndex}
                     diary = {diary}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();