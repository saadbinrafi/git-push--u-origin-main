

const ErrorPage = () => {
    // eslint-disable-next-line no-undef
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>Oops !!!</h2>
            <p>{error.statusText || error.message}</p>
        </div>
    );
};

export default ErrorPage;