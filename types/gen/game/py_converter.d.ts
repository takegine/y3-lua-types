// @ts-nocheck
declare interface PYConverter {
    py_to_lua(py_type: string, py_value: any): any;
    lua_to_py(py_type: string, lua_value: any): any;
    lua_to_py_factory(py_type: string): fun(py_value:any):any;
    py_to_lua_factory(py_type: string): fun(lua_value:any):any;
    register_py_to_lua(py_type: string, converter: fun(py_value:any):any): void;
    register_lua_to_py(py_type: string, converter: fun(lua_value:any):any): void;
    get_py_type(type_name: string): string;
    register_type_alias(py_type_name: string, lua_type_name: string): void;
}
