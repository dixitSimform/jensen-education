import { useState } from "react";

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

const useAbilities = () => {
  const [abilities, setAbilities] = useState<Ability[]>([]);
  const [abilityModal, setAbilityModal] = useState(false);
  const [requirementModal, setRequirementModal] = useState(false);
  const [modalDeleteAbilityOpen, setDeleteAbilityModal] = useState(false);
  const [modalDeleteRequirementOpen, setDeleteRequirementModal] = useState(false);
  const [selectedAbility, setSelectedAbility] = useState<Ability | undefined>(
    undefined
  );
  const [selectedRequirement, setSelectedRequirement] = useState<
    Requirement | undefined
  >(undefined);
  // Add a new ability with default empty requirements
  const addAbility = (ability: Omit<Ability, "id">) => {
    const newAbility: Ability = {
      ...ability,
      id: (abilities.length + 1).toString(),
      requirements: [],
    };
    setAbilities((prev) => [...prev, newAbility]);
  };

  // Add a requirement to an existing ability by ability ID
  const addRequirementToAbility = (
    abilityId: string,
    requirement: Omit<Requirement, "requirementId">
  ) => {
    const updatedAbilities = abilities.map((ability) => {
      if (ability.id === abilityId) {
        const newRequirement: Requirement = {
          ...requirement,
          requirementId: (ability.requirements.length + 1).toString(),
        };
        return {
          ...ability,
          requirements: [...ability.requirements, newRequirement],
        };
      }
      return ability;
    });
    setAbilities(updatedAbilities);
  };

  // Edit an ability by ability ID
  const editAbility = (
    abilityId: string,
    updatedData: Partial<Omit<Ability, "id" | "requirements">>
  ) => {
    const updatedAbilities = abilities.map((ability) => {
      if (ability.id === abilityId) {
        return { ...ability, ...updatedData };
      }
      return ability;
    });
    setAbilities(updatedAbilities);
  };

  // Edit a requirement by ability ID and requirement ID
  const editRequirement = (
    abilityId: string,
    requirementId: string,
    updatedData: Partial<Requirement>
  ) => {
    const updatedAbilities = abilities.map((ability) => {
      if (ability.id === abilityId) {
        const updatedRequirements = ability.requirements.map((req) => {
          if (req.requirementId === requirementId) {
            return { ...req, ...updatedData };
          }
          return req;
        });
        return { ...ability, requirements: updatedRequirements };
      }
      return ability;
    });
    setAbilities(updatedAbilities);
  };

  // Delete an ability by ability ID
  const deleteAbility = (abilityId: string) => {
    setAbilities((prev) => prev.filter((ability) => ability.id !== abilityId));
  };

  // Delete a requirement by ability ID and requirement ID
  const deleteRequirement = (abilityId: string, requirementId: string) => {
    const updatedAbilities = abilities.map((ability) => {
      if (ability.id === abilityId) {
        const updatedRequirements = ability.requirements.filter(
          (req) => req.requirementId !== requirementId
        );
        return { ...ability, requirements: updatedRequirements };
      }
      return ability;
    });
    setAbilities(updatedAbilities);
  };

  return {
    abilities,
    addAbility,
    addRequirementToAbility,
    editAbility,
    editRequirement,
    deleteAbility,
    deleteRequirement,
    selectedAbility,
    selectedRequirement,
    setSelectedAbility,
    setSelectedRequirement,
    abilityModal,
    requirementModal,
    setAbilityModal,
    setRequirementModal,
    modalDeleteAbilityOpen,
    modalDeleteRequirementOpen,
    setDeleteAbilityModal,
    setDeleteRequirementModal,
  };
};

export default useAbilities;
