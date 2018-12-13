export const POWERANALYSIS_CALCULATE_POWER_START = 'POWERANALYSIS_CALCULATE_POWER_START';
export const POWERANALYSIS_CALCULATE_POWER_SUCCESS = 'POWERANALYSIS_CALCULATE_POWER_SUCCESS';
export const POWERANALYSIS_UPDATE_EFFECT_SIZE_START = 'POWERANALYSIS_UPDATE_EFFECT_SIZE_START';
export const POWERANALYSIS_UPDATE_EFFECT_SIZE_SUCCESS = 'POWERANALYSIS_UPDATE_EFFECT_SIZE_SUCCESS';
export const POWERANALYSIS_CALCULATE_POWER_MARGIN_START = 'POWERANALYSIS_CALCULATE_POWER_MARGIN_START';
export const POWERANALYSIS_CALCULATE_POWER_MARGIN_SUCCESS = 'POWERANALYSIS_CALCULATE_POWER_MARGIN_SUCCESS';
export const POWERANALYSIS_UPDATE_MARGIN_FOR_DESIGN_START = 'POWERANALYSIS_UPDATE_MARGIN_FOR_DESIGN_START';
export const POWERANALYSIS_UPDATE_MARGIN_FOR_DESIGN_SUCCESS = 'POWERANALYSIS_UPDATE_MARGIN_FOR_DESIGN_SUCCESS';

export const updatePower = () => ({
  type: POWERANALYSIS_CALCULATE_POWER_START,
});

export const updateEffectSizeForDesign = (designId, effectSize) => ({
  type: POWERANALYSIS_UPDATE_EFFECT_SIZE_START,
  designId,
  effectSize,
});


export const calculatePowerMargin = () => ({
  type: POWERANALYSIS_CALCULATE_POWER_MARGIN_START,
});

export const updateMarginForDesign = (designId, margin) => ({
  type: POWERANALYSIS_UPDATE_MARGIN_FOR_DESIGN_START,
  designId,
  margin,
});
