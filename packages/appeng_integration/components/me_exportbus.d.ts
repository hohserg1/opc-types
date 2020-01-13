declare namespace AppliedEnergistics2 {
    /**
    * This component is provided by the me_exportbus.
    * @see
    * @noSelf
    */
    interface ME_EXPORTBUS extends CommonNetwork{
        /**
         * Configure the export bus pointing in the specified direction to export item stacks matching the specified descriptor.
         */
        setExportConfiguration(side:number, slot?:number, database?:string, entry?:number):boolean;

        /**
         * A table of tanks will be returned, each with a table of information
         * direction:string{DOWN,UP,NORTH,SOUTH,WEST,EAST,UNKNOWN}
         */
        getTankInfo(direction?:string):LuaTable<any,any>;

        /**
         * Get the configuration of the export bus pointing in the specified direction.
         */
        getExportConfiguration(side:number, slot?:number):boolean;

        /**
         * Make the export bus facing the specified direction perform a single export operation into the specified slot.
         */
        exportIntoSlot(side:number, slot:number):boolean;
    }
}
