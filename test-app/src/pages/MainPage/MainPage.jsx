import Counter from "../../components/Counter/Counter";

const MainPage = () => {
    return (
        <div>
            <h1 data-testid="main-page">Главная страница</h1>
            <Counter />
        </div>
    );
};

export default MainPage;