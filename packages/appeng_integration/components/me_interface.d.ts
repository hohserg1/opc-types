declare namespace AppliedEnergistics2 {
    /**
    * This component is provided by the me_interface.
    * @see
    * @noSelf
    */
    interface ME_INTERFACE extends CommonNetwork {


        /**
         * Get a list of the stored items in the network.
         */
        getItemsInNetwork(filter?:ItemFilter):ItemStackRepr[];

        /**
         * Requests the specified item to get crafted.
         */
        requestCrafting(fingerprint:{id:string,dmg?:number,nbt_hash?:string},qty?:number,cpu?:string):void;

        /**
         * Get a list of the stored gases in the network.
         */
        getGasesInNetwork():GasRepr[];

        /**
         * Returns true when the interface can export to side.
         */
        canExport(direction:string):boolean;

        /**
         * Get a list of known item recipes. These can be used to issue crafting requests.
         */
        getCraftables(filter?:ItemFilter):LuaTable<string,any>;

        /**
         * Exports the specified item into the target inventory.
         */
        exportItem(fingerprint:{id:string,dmg?:number,nbt_hash?:string},direction:string,maxAmount?:number,intoSlot?:number):LuaTable<string,any>;

        /**
         * Store items in the network matching the specified filter in the database with the specified address.
         */
        store(filter:ItemFilter, dbAddress:string, startSlot?:number, count?:number): Boolean;

        /**
         * Get the configuration of the interface.
         */
        getInterfaceConfiguration(slot?:number):LuaTable<string,any>;

        /**
         * Configure the interface.
         */
        setInterfaceConfiguration(slot?:number, database?:string, entry?:number, size?:number):boolean;

        /**
         * Get a list of the stored fluids in the network.
         */
        getFluidsInNetwork():LuaTable<string,any>;

        /**
         * Get a list of tables representing the available CPUs in the network.
         */
        getCpus():CraftingCpu[];
    }
}
