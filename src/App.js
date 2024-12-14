import './App.css';
import Header from './components/header';
import Body from './components/body'
import Result from './components/result'
function App() {
  const sampleArticles = [
    {
        image: "https://via.placeholder.com/400x300",
        title: "Breaking News: Exciting Event",
        description: "A brief summary of the news article to engage readers.",
        url: "https://example.com/news1",
    },
    {
        image: "https://via.placeholder.com/400x300",
        title: "Tech Update: New Innovations",
        description: "An insight into the latest advancements in technology.",
        url: "https://example.com/news2",
    },
    {
        image: "https://via.placeholder.com/400x300",
        title: "Sports Update: Championship Highlights",
        description: "Catch the latest updates from the sports world.",
        url: "https://example.com/news3",
    },
];
  return (
    <>
    <Header/>
    <Body/>
    <Result articles = {sampleArticles}/>
    </>
  );
}

export default App;
