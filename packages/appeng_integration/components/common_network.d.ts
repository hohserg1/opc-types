declare namespace AppliedEnergistics2 {
    /**
    * This component is provided by the me_exportbus.
    * @see
    * @noSelf
    */
    interface CommonNetwork{
        /**
         * Get the average power injection into the network
         */
        getAvgPowerInjection():number;

        /**
         * Get a complete table of information about all available methods
         */
        getAdvancedMethodsData(method?:string):LuaTable<string,any>;

        /**
         * Get a complete table of information about all available methods
         */
        getAdvancedMethodsData(method?:string):LuaTable<string,any>;

        /**
         * Get a complete table of information about all available methods
         */
        getAdvancedMethodsData(method?:string):LuaTable<string,any>;
        /**
         * Get full stack information from id and/or damage
         */
        expandStack(stack:{id:string,dmg?:number,qty?:number}):LuaTable<string,any>;
        /**
         * Condense and tidy the stacks in an inventory
         */
        condenseItems():void;

        /**
         * Pull an item from a slot in another inventory into a slot in this one. Returns the amount of items moved
         * direction:string{DOWN,UP,NORTH,SOUTH,WEST,EAST,UNKNOWN}
         */
        pullItemIntoSlot(direction:string,slot:number,maxAmount?:number,intoSlot?:number):number;
        /**
         * List all method sources
         */
        listSources():LuaTable<string,boolean>;
        /**
         * Get the stored power in the network.
         */
        getStoredPower():number;

        /**
         * Destroy a stack
         */
        destroyStack(slotNumber:number):void;

        /**
         * Get a list of tables representing the available CPUs in the network.
         */
        getCraftingCPUs():CraftingCpu[];

        /**
         * Brief description of method
         */
        doc(method:string):string;
        /**
         * Push an item from the current inventory into pipe or slot on the other inventory. Returns the amount of items moved
         * directory:string
         */
        pushItemIntoSlot(direction:string,slot:number,maxAmount?:number,intoSlot?:number):number;

        /**
         * List all the methods available
         */
        listMethods(filterSource?:string):string;

        /**
         * Get a table with all the items of the chest
         */
        getAllStacks(proxy?:boolean):ItemStackRepr[];

        /**
         * Pull an item from a slot in another inventory into a slot in this one. Returns the amount of items moved
         * direction:string{DOWN,UP,NORTH,SOUTH,WEST,EAST,UNKNOWN}
         */
        pullItem(direction:string,slot:number,maxAmount?:number,intoSlot?:number):number;

        /**
         * Get the average power usage of the network.
         */
        getAvgPowerUsage():number;

        /**
         * Push an item from the current inventory into pipe or slot on the other inventory. Returns the amount of items moved
         * direction:string{DOWN,UP,NORTH,SOUTH,WEST,EAST,UNKNOWN}
         */
        pushItem(direction:string,slot:number,maxAmount?:number,intoSlot?:number):number;

        /**
         * Get the idle power usage of the network.
         */
        getIdlePowerUsage():number;

        /**
         * Get the maximum stored power in the network.
         */
        getMaxStoredPower():number;

        /**
         * Swap two slots in the inventory
         * direction:string{DOWN,UP,NORTH,SOUTH,WEST,EAST,UNKNOWN}
         */
        swapStacks(from:number,to:number,fromDirection?:string,toDirection?:string):void;

        /**
         * Get details of an item in a particular slot
         */
        getStackInSlot(slotNumber:number,proxy?:boolean):object;

        /**
         * Get a list of the stored and craftable items in the network.
         * details:string{NONE,PROXY,ALL}
         */
        getAvailableItems(details?:string):LuaTable<string,any>;

        /**
         * Get the size of this inventory
         */
        getInventorySize():number;

        /**
         * Retrieves details about the specified item from the ME Network.
         */
        getItemDetail(item:{id:string,dmg?:number,nbt_hash?:string},proxy?:boolean):object;

        /**
         * Get the name of this inventory
         */
        getInventoryName():string;
    }
}