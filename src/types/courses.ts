export interface Requirement {
  requirementTitle: string;
  requirementDescription: string;
  requirementId: string;
  gradeE: string;
  gradeC: string;
  gradeA: string;
}

export interface Ability {
  abilityTitle: string;
  abilityDescription: string;
  id: string;
  requirements: Requirement[];
}

export interface RequirementCardProps {
  ability: Ability;
  requirement: Requirement;
  onEdit: () => void;
  onDelete: () => void;
}

export interface RequirementFormProps {
  requirementModal: boolean;
  setRequirementModal: React.Dispatch<React.SetStateAction<boolean>>;
  addRequirementToAbility: (
    abilityId: string,
    requirement: Omit<Requirement, "requirementId">
  ) => void;
  selectedRequirement?: Requirement;
  selectedAbility?: Ability;

  editRequirement: (
    abilityId: string,
    requirementId: string,
    updatedData: Partial<Requirement>
  ) => void;
  setSelectedAbility: React.Dispatch<React.SetStateAction<Ability | undefined>>;
  setSelectedRequirement: React.Dispatch<
    React.SetStateAction<Requirement | undefined>
  >;
}
