declare namespace AppliedEnergistics2 {
    /**
    * This component is provided by the me_importbus.
    * @see
    * @noSelf
    */
    interface ME_IMPORTBUS extends CommonNetwork{

        /**
         * Configure the import bus pointing in the specified direction to import item stacks matching the specified descriptor.
         */
        setImportConfiguration(side:number, slot?:number, database?:string, entry?:number):boolean;

        /**
         * A table of tanks will be returned, each with a table of information
         */
        getTankInfo(direction?:string):LuaTable<any,any>;

        /**
         * Get the configuration of the import bus pointing in the specified direction.
         */
        getImportConfiguration(side:number, slot?:number):boolean;
    }
}
