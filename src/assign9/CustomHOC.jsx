

const Spinner = () =>{
    return(
        <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin">
            </div>
        </div>
    )
}


export const withSpinner = (WrappedComponent) => {
    return ({ isLoading, ...props}) => {
        if(isLoading){
            return <Spinner />
        }
        return <WrappedComponent {...props}/>
    };
};


export const RandomComponent = ({data}) => {
    return(
        <div>
            Data - {data}
        </div>
    )
}

export const ComponentWithSpinner = withSpinner(RandomComponent);