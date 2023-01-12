import React from "react";

function FiltrarUsuario(){
    return(
        <div>
            <form className="flex items-center" action="/editar">   
                <label for="simple-search" className="sr-only">Search</label>
                <div className="relative w-full pl-[250px] flex flex row">
                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
                    <img className="w-[20px] h-[20px] ml-[-33px] mt-[11px]" src="https://cdn-icons-png.flaticon.com/512/4929/4929731.png" alt="search"/>
                </div>
            </form>
        </div>
    );
};

export default FiltrarUsuario;