declare namespace AppliedEnergistics2 {
    interface CraftingCpu{
        busy:boolean;
        coprocessors:number;
        name:string;
        storage:number;
    }
    interface FluidRepr{
        amount:number;
        hasTag:boolean;
        label:string;
        name:string;
    }
    interface ItemFilter{
        name:string | undefined;
        label: string | undefined;
    }
    interface ItemStackRepr{
        name:string;
        damage:number;
        label:string;
        enchantments:EnchantmentRepr[];
        hasTag:boolean;
        isCraftable:boolean;
        maxDamage:number;
        maxSize:number;
        size:number;
    }
    interface EnchantmentRepr{
        name:string;
        label:string;
        level:number;
    }
    interface GasRepr{
        //to do
    }
}