declare namespace AppliedEnergistics2 {
    /**
    * This component is provided by the me_controller.
    * @see https://ocdoc.cil.li/component:applied_energistics
    * @noSelf
    */
    interface ME_CONTROLLER extends CommonNetwork {

        /**
         * Get a list of the stored fluids in the network.
         */
        getFluidsInNetwork():FluidRepr[];

        /**
         * Store items in the network matching the specified filter in the database with the specified address.
         */
        store(filter:ItemFilter, dbAddress:string, startSlot?:number, count?:number): Boolean;

        /**
         * Get a list of tables representing the available CPUs in the network.
         */
        getCpus():CraftingCpu[];

        /**
         * Get a list of the stored gases in the network.
         */
        getGasesInNetwork():GasRepr[];

        /**
         * Get a list of known item recipes. These can be used to issue crafting requests.
         */
        getCraftables(filter?:LuaTable<string,any>):LuaTable<string,any>;

        /**
         * Get a list of the stored items in the network.
         */
        getItemsInNetwork(filter?:LuaTable<string,any>):ItemStackRepr[];
    }
}
