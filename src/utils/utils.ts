export enum RootCategory {
	LaserMachines = 'Laser machines',
	FiberMetalCutters = 'Fiber metal cutters',
	LaserMarkers = 'Laser markers',
	MillingMachines = 'Milling machines',
}

export const attributePrefixByRootCategory = {
	[RootCategory.LaserMachines]: 'pa_lm__',
	[RootCategory.FiberMetalCutters]: 'pa_fmc__',
	[RootCategory.LaserMarkers]: 'pa_lmrk__',
	[RootCategory.MillingMachines]: 'pa_mm__',
};

export const attributesByCategoryName = {
	[RootCategory.LaserMachines]: ['Laser power', 'Work area', 'Controller', 'Tube life', 'Guides'],
	[RootCategory.FiberMetalCutters]: ['Laser power', 'Work area', 'Laser life', 'Laser', 'Motors'],
	[RootCategory.LaserMarkers]: ['Laser type', 'Laser power', 'Work area', 'Laser life', 'Laser emitter'],
	[RootCategory.MillingMachines]: ['Work area', 'Spindle power', 'Collet', 'Format type', 'Features'],
};

export function stringToSlug(str) {
	return str.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/ /g, '-');
}
