import Collection from '@discordjs/collection';
import type { BrawlerInterface, Brawlers, BrawlersType } from './types';

/**
 * All the brawlers from the API wrapped inside a Map.
 */
export function makeBrawlersMap() {
	const collection = new Collection<Brawlers | BrawlersType, BrawlerInterface>();
	collection.set('SHELLY', {
		id: 16000000,
		name: 'SHELLY',
		starPowers: [
			{ id: 23000076, name: 'SHELL SHOCK' },
			{ id: 23000135, name: 'BAND-AID' }
		],
		gadgets: [
			{ id: 23000255, name: 'FAST FORWARD' },
			{ id: 23000288, name: 'CLAY PIGEONS' }
		]
	});
	collection.set('COLT', {
		id: 16000001,
		name: 'COLT',
		starPowers: [
			{ id: 23000077, name: 'SLICK BOOTS' },
			{ id: 23000138, name: 'MAGNUM SPECIAL' }
		],
		gadgets: [
			{ id: 23000273, name: 'SPEEDLOADER' },
			{ id: 23000319, name: 'SILVER BULLET' }
		]
	});
	collection.set('BULL', {
		id: 16000002,
		name: 'BULL',
		starPowers: [
			{ id: 23000078, name: 'BERSERKER' },
			{ id: 23000137, name: 'TOUGH GUY' }
		],
		gadgets: [
			{ id: 23000272, name: 'T-BONE INJECTOR' },
			{ id: 23000310, name: 'STOMPER' }
		]
	});
	collection.set('BROCK', {
		id: 16000003,
		name: 'BROCK',
		starPowers: [
			{ id: 23000079, name: 'MORE ROCKETS!' },
			{ id: 23000150, name: 'ROCKET NO. 4' }
		],
		gadgets: [
			{ id: 23000245, name: 'ROCKET LACES' },
			{ id: 23000316, name: 'ROCKET FUEL' }
		]
	});
	collection.set('RICO', {
		id: 16000004,
		name: 'RICO',
		starPowers: [
			{ id: 23000080, name: 'SUPER BOUNCY' },
			{ id: 23000156, name: 'ROBO RETREAT' }
		],
		gadgets: [
			{ id: 23000246, name: 'MULTIBALL LAUNCHER' },
			{ id: 23000409, name: 'BOUNCY CASTLE' }
		]
	});
	collection.set('SPIKE', {
		id: 16000005,
		name: 'SPIKE',
		starPowers: [
			{ id: 23000081, name: 'FERTILIZE' },
			{ id: 23000151, name: 'CURVEBALL' }
		],
		gadgets: [
			{ id: 23000247, name: 'POPPING PINCUSHION' },
			{ id: 23000406, name: 'LIFE PLANT' }
		]
	});
	collection.set('BARLEY', {
		id: 16000006,
		name: 'BARLEY',
		starPowers: [
			{ id: 23000082, name: 'MEDICAL USE' },
			{ id: 23000158, name: 'EXTRA NOXIOUS' }
		],
		gadgets: [
			{ id: 23000250, name: 'STICKY SYRUP MIXER' },
			{ id: 23000293, name: 'HERBAL TONIC' }
		]
	});
	collection.set('JESSIE', {
		id: 16000007,
		name: 'JESSIE',
		starPowers: [
			{ id: 23000083, name: 'ENERGIZE' },
			{ id: 23000149, name: 'SHOCKY' }
		],
		gadgets: [
			{ id: 23000251, name: 'SPARK PLUG' },
			{ id: 23000295, name: 'RECOIL SPRING' }
		]
	});
	collection.set('NITA', {
		id: 16000008,
		name: 'NITA',
		starPowers: [
			{ id: 23000084, name: 'BEAR WITH ME' },
			{ id: 23000136, name: 'HYPER BEAR' }
		],
		gadgets: [
			{ id: 23000249, name: 'BEAR PAWS' },
			{ id: 23000314, name: 'FAUX FUR' }
		]
	});
	collection.set('DYNAMIKE', {
		id: 16000009,
		name: 'DYNAMIKE',
		starPowers: [
			{ id: 23000085, name: 'DYNA-JUMP' },
			{ id: 23000155, name: 'DEMOLITION' }
		],
		gadgets: [
			{ id: 23000258, name: 'FIDGET SPINNER' },
			{ id: 23000294, name: 'SATCHEL CHARGE' }
		]
	});
	collection.set('EL PRIMO', {
		id: 16000010,
		name: 'EL PRIMO',
		starPowers: [
			{ id: 23000086, name: 'EL FUEGO' },
			{ id: 23000140, name: 'METEOR RUSH' }
		],
		gadgets: [
			{ id: 23000264, name: 'SUPLEX SUPPLEMENT' },
			{ id: 23000292, name: 'ASTEROID BELT' }
		]
	});
	collection.set('MORTIS', {
		id: 16000011,
		name: 'MORTIS',
		starPowers: [
			{ id: 23000087, name: 'CREEPY HARVEST' },
			{ id: 23000154, name: 'COILED SNAKE' }
		],
		gadgets: [
			{ id: 23000265, name: 'COMBO SPINNER' },
			{ id: 23000290, name: 'SURVIVAL SHOVEL' }
		]
	});
	collection.set('CROW', {
		id: 16000012,
		name: 'CROW',
		starPowers: [
			{ id: 23000088, name: 'EXTRA TOXIC' },
			{ id: 23000143, name: 'CARRION CROW' }
		],
		gadgets: [
			{ id: 23000243, name: 'DEFENSE BOOSTER' },
			{ id: 23000286, name: 'SLOWING TOXIN' }
		]
	});
	collection.set('POCO', {
		id: 16000013,
		name: 'POCO',
		starPowers: [
			{ id: 23000089, name: 'DA CAPO!' },
			{ id: 23000144, name: 'SCREECHING SOLO' }
		],
		gadgets: [
			{ id: 23000267, name: 'TUNING FORK' },
			{ id: 23000350, name: 'PROTECTIVE TUNES' }
		]
	});
	collection.set('BO', {
		id: 16000014,
		name: 'BO',
		starPowers: [
			{ id: 23000090, name: 'CIRCLING EAGLE' },
			{ id: 23000148, name: 'SNARE A BEAR' }
		],
		gadgets: [
			{ id: 23000263, name: 'SUPER TOTEM' },
			{ id: 23000289, name: 'TRIPWIRE' }
		]
	});
	collection.set('PIPER', {
		id: 16000015,
		name: 'PIPER',
		starPowers: [
			{ id: 23000091, name: 'AMBUSH' },
			{ id: 23000152, name: 'SNAPPY SNIPING' }
		],
		gadgets: [
			{ id: 23000268, name: 'AUTO AIMER' },
			{ id: 23000291, name: 'HOMEMADE RECIPE' }
		]
	});
	collection.set('PAM', {
		id: 16000016,
		name: 'PAM',
		starPowers: [
			{ id: 23000092, name: "MAMA'S HUG" },
			{ id: 23000139, name: "MAMA'S SQUEEZE" }
		],
		gadgets: [
			{ id: 23000257, name: 'PULSE MODULATOR' },
			{ id: 23000404, name: 'SCRAPSUCKER' }
		]
	});
	collection.set('TARA', {
		id: 16000017,
		name: 'TARA',
		starPowers: [
			{ id: 23000093, name: 'BLACK PORTAL' },
			{ id: 23000160, name: 'HEALING SHADE' }
		],
		gadgets: [
			{ id: 23000266, name: 'PSYCHIC ENHANCER' },
			{ id: 23000356, name: 'SUPPORT FROM BEYOND' }
		]
	});
	collection.set('DARRYL', {
		id: 16000018,
		name: 'DARRYL',
		starPowers: [
			{ id: 23000094, name: 'STEEL HOOPS' },
			{ id: 23000157, name: 'ROLLING RELOAD' }
		],
		gadgets: [
			{ id: 23000260, name: 'RECOILING ROTATOR' },
			{ id: 23000313, name: 'TAR BARREL' }
		]
	});
	collection.set('PENNY', {
		id: 16000019,
		name: 'PENNY',
		starPowers: [
			{ id: 23000099, name: 'LAST BLAST' },
			{ id: 23000142, name: 'BALLS OF FIRE' }
		],
		gadgets: [
			{ id: 23000248, name: 'POCKET DETONATOR' },
			{ id: 23000287, name: "CAPTAIN'S COMPASS" }
		]
	});
	collection.set('FRANK', {
		id: 16000020,
		name: 'FRANK',
		starPowers: [
			{ id: 23000104, name: 'POWER GRAB' },
			{ id: 23000153, name: 'SPONGE' }
		],
		gadgets: [
			{ id: 23000261, name: 'ACTIVE NOISE CANCELING' },
			{ id: 23000351, name: 'IRRESISTIBLE ATTRACTION' }
		]
	});
	collection.set('GENE', {
		id: 16000021,
		name: 'GENE',
		starPowers: [
			{ id: 23000109, name: 'MAGIC PUFFS' },
			{ id: 23000159, name: 'SPIRIT SLAP' }
		],
		gadgets: [
			{ id: 23000252, name: 'LAMP BLOWOUT' },
			{ id: 23000352, name: 'VENGEFUL SPIRITS' }
		]
	});
	collection.set('TICK', {
		id: 16000022,
		name: 'TICK',
		starPowers: [
			{ id: 23000114, name: 'WELL OILED' },
			{ id: 23000161, name: 'AUTOMA-TICK RELOAD' }
		],
		gadgets: [
			{ id: 23000253, name: 'MINE MANIA' },
			{ id: 23000355, name: 'LAST HURRAH' }
		]
	});
	collection.set('LEON', {
		id: 16000023,
		name: 'LEON',
		starPowers: [
			{ id: 23000119, name: 'SMOKE TRAILS' },
			{ id: 23000141, name: 'INVISIHEAL' }
		],
		gadgets: [
			{ id: 23000276, name: 'CLONE PROJECTOR' },
			{ id: 23000408, name: 'LOLLIPOP DROP' }
		]
	});
	collection.set('ROSA', {
		id: 16000024,
		name: 'ROSA',
		starPowers: [
			{ id: 23000124, name: 'PLANT LIFE' },
			{ id: 23000147, name: 'THORNY GLOVES' }
		],
		gadgets: [
			{ id: 23000242, name: 'GROW LIGHT' },
			{ id: 23000348, name: 'UNFRIENDLY BUSHES' }
		]
	});
	collection.set('CARL', {
		id: 16000025,
		name: 'CARL',
		starPowers: [
			{ id: 23000129, name: 'POWER THROW' },
			{ id: 23000145, name: 'PROTECTIVE PIROUETTE' }
		],
		gadgets: [
			{ id: 23000262, name: 'HEAT EJECTOR' },
			{ id: 23000317, name: 'FLYING HOOK' }
		]
	});
	collection.set('BIBI', {
		id: 16000026,
		name: 'BIBI',
		starPowers: [
			{ id: 23000134, name: 'HOME RUN' },
			{ id: 23000146, name: 'BATTING STANCE' }
		],
		gadgets: [
			{ id: 23000275, name: 'VITAMIN BOOSTER' },
			{ id: 23000458, name: 'EXTRA STICKY' }
		]
	});
	collection.set('8-BIT', {
		id: 16000027,
		name: '8-BIT',
		starPowers: [
			{ id: 23000168, name: 'BOOSTED BOOSTER' },
			{ id: 23000181, name: 'PLUGGED IN' }
		],
		gadgets: [
			{ id: 23000259, name: 'CHEAT CARTRIDGE' },
			{ id: 23000318, name: 'EXTRA CREDITS' }
		]
	});
	collection.set('SANDY', {
		id: 16000028,
		name: 'SANDY',
		starPowers: [
			{ id: 23000186, name: 'RUDE SANDS' },
			{ id: 23000187, name: 'HEALING WINDS' }
		],
		gadgets: [
			{ id: 23000270, name: 'SLEEP STIMULATOR' },
			{ id: 23000405, name: 'SWEET DREAMS' }
		]
	});
	collection.set('BEA', {
		id: 16000029,
		name: 'BEA',
		starPowers: [
			{ id: 23000192, name: 'INSTA BEALOAD' },
			{ id: 23000193, name: 'HONEYCOMB' }
		],
		gadgets: [
			{ id: 23000271, name: 'HONEY MOLASSES' },
			{ id: 23000312, name: 'RATTLED HIVE' }
		]
	});
	collection.set('EMZ', {
		id: 16000030,
		name: 'EMZ',
		starPowers: [
			{ id: 23000198, name: 'BAD KARMA' },
			{ id: 23000199, name: 'HYPE' }
		],
		gadgets: [
			{ id: 23000274, name: 'FRIENDZONER' },
			{ id: 23000459, name: 'ACID SPRAY' }
		]
	});
	collection.set('MR. P', {
		id: 16000031,
		name: 'MR. P',
		starPowers: [
			{ id: 23000204, name: 'HANDLE WITH CARE' },
			{ id: 23000205, name: 'REVOLVING DOOR' }
		],
		gadgets: [
			{ id: 23000269, name: 'SERVICE BELL' },
			{ id: 23000349, name: 'PORTER REINFORCEMENTS' }
		]
	});
	collection.set('MAX', {
		id: 16000032,
		name: 'MAX',
		starPowers: [
			{ id: 23000210, name: 'SUPER CHARGED' },
			{ id: 23000211, name: 'RUN N GUN' }
		],
		gadgets: [
			{ id: 23000254, name: 'PHASE SHIFTER' },
			{ id: 23000311, name: 'SNEAKY SNEAKERS' }
		]
	});
	collection.set('JACKY', {
		id: 16000034,
		name: 'JACKY',
		starPowers: [
			{ id: 23000222, name: 'COUNTER CRUSH' },
			{ id: 23000223, name: 'HARDY HARD HAT' }
		],
		gadgets: [{ id: 23000256, name: 'PNEUMATIC BOOSTER' }]
	});
	collection.set('GALE', {
		id: 16000035,
		name: 'GALE',
		starPowers: [
			{ id: 23000228, name: 'BLUSTERY BLOW' },
			{ id: 23000229, name: 'FREEZING SNOW' }
		],
		gadgets: [
			{ id: 23000277, name: 'SPRING EJECTOR' },
			{ id: 23000407, name: 'TWISTER' }
		]
	});
	collection.set('NANI', {
		id: 16000036,
		name: 'NANI',
		starPowers: [
			{ id: 23000234, name: 'AUTOFOCUS' },
			{ id: 23000235, name: 'TEMPERED STEEL' }
		],
		gadgets: [
			{ id: 23000278, name: 'WARP BLAST' },
			{ id: 23000353, name: 'RETURN TO SENDER' }
		]
	});
	collection.set('SPROUT', {
		id: 16000037,
		name: 'SPROUT',
		starPowers: [
			{ id: 23000240, name: 'OVERGROWTH' },
			{ id: 23000241, name: 'PHOTOSYNTHESIS' }
		],
		gadgets: [
			{ id: 23000244, name: 'GARDEN MULCHER' },
			{ id: 23000315, name: 'TRANSPLANT' }
		]
	});
	collection.set('SURGE', {
		id: 16000038,
		name: 'SURGE',
		starPowers: [
			{ id: 23000283, name: 'TO THE MAX!' },
			{ id: 23000284, name: 'SERVE ICE COLD' }
		],
		gadgets: [{ id: 23000285, name: 'POWER SURGE' }]
	});
	collection.set('COLETTE', {
		id: 16000039,
		name: 'COLETTE',
		starPowers: [
			{ id: 23000300, name: 'PUSH IT' },
			{ id: 23000301, name: 'MASS TAX' }
		],
		gadgets: [
			{ id: 23000302, name: 'NA-AH!' },
			{ id: 23000457, name: 'GOTCHA!' }
		]
	});
	collection.set('AMBER', {
		id: 16000040,
		name: 'AMBER',
		starPowers: [
			{ id: 23000307, name: 'WILD FLAMES' },
			{ id: 23000308, name: "SCORCHIN' SIPHON" }
		],
		gadgets: [{ id: 23000309, name: 'FIRE STARTERS' }]
	});
	collection.set('LOU', {
		id: 16000041,
		name: 'LOU',
		starPowers: [
			{ id: 23000324, name: 'SUPERCOOL' },
			{ id: 23000325, name: 'HYPOTHERMIA' }
		],
		gadgets: [
			{ id: 23000326, name: 'ICE BLOCK' },
			{ id: 23000400, name: 'CRYO SYRUP' }
		]
	});
	collection.set('BYRON', {
		id: 16000042,
		name: 'BYRON',
		starPowers: [
			{ id: 23000331, name: 'MALAISE' },
			{ id: 23000332, name: 'INJECTION' }
		],
		gadgets: [
			{ id: 23000333, name: 'SHOT IN THE ARM' },
			{ id: 23000461, name: 'BOOSTER SHOTS' }
		]
	});
	collection.set('EDGAR', {
		id: 16000043,
		name: 'EDGAR',
		starPowers: [
			{ id: 23000338, name: 'HARD LANDING' },
			{ id: 23000339, name: 'FISTICUFFS' }
		],
		gadgets: [
			{ id: 23000340, name: "LET'S FLY" },
			{ id: 23000403, name: 'HARDCORE' }
		]
	});
	collection.set('COLONEL RUFFS', {
		id: 16000044,
		name: 'COLONEL RUFFS',
		starPowers: [
			{ id: 23000345, name: 'AIR SUPERIORITY' },
			{ id: 23000346, name: 'FIELD PROMOTION' }
		],
		gadgets: [
			{ id: 23000347, name: 'TAKE COVER' },
			{ id: 23000402, name: 'AIR SUPPORT' }
		]
	});
	collection.set('STU', {
		id: 16000045,
		name: 'STU',
		starPowers: [
			{ id: 23000362, name: 'ZERO DRAG' },
			{ id: 23000363, name: 'GASO-HEAL' }
		],
		gadgets: [
			{ id: 23000364, name: 'SPEED ZONE' },
			{ id: 23000401, name: 'BREAKTHROUGH' }
		]
	});
	collection.set('BELLE', {
		id: 16000046,
		name: 'BELLE',
		starPowers: [
			{ id: 23000369, name: 'POSITIVE FEEDBACK' },
			{ id: 23000370, name: 'GROUNDED' }
		],
		gadgets: [
			{ id: 23000371, name: 'NEST EGG' },
			{ id: 23000463, name: 'REVERSE POLARITY' }
		]
	});
	collection.set('SQUEAK', {
		id: 16000047,
		name: 'SQUEAK',
		starPowers: [
			{ id: 23000376, name: 'CHAIN REACTION' },
			{ id: 23000377, name: 'SUPER STICKY' }
		],
		gadgets: [
			{ id: 23000378, name: 'WINDUP' },
			{ id: 23000462, name: 'RESIDUE' }
		]
	});
	collection.set('GROM', {
		id: 16000048,
		name: 'GROM',
		starPowers: [
			{ id: 23000383, name: 'FOOT PATROL' },
			{ id: 23000384, name: 'X-FACTOR' }
		],
		gadgets: [
			{ id: 23000385, name: 'WATCHTOWER' },
			{ id: 23000460, name: 'RADIO CHECK' }
		]
	});
	collection.set('BUZZ', {
		id: 16000049,
		name: 'BUZZ',
		starPowers: [
			{ id: 23000390, name: 'TOUGHER TORPEDO' },
			{ id: 23000391, name: 'EYES SHARP' }
		],
		gadgets: [{ id: 23000392, name: 'RESERVE BUOY' }]
	});
	collection.set('GRIFF', {
		id: 16000050,
		name: 'GRIFF',
		starPowers: [
			{ id: 23000397, name: 'KEEP THE CHANGE' },
			{ id: 23000398, name: 'BUSINESS RESILIENCE' }
		],
		gadgets: [{ id: 23000399, name: 'PIGGY BANK' }]
	});
	collection.set('ASH', {
		id: 16000051,
		name: 'ASH',
		starPowers: [
			{ id: 23000414, name: 'FIRST BASH' },
			{ id: 23000415, name: 'MAD AS HECK' }
		],
		gadgets: [
			{ id: 23000416, name: 'CHILL PILL' },
			{ id: 23000465, name: 'ROTTEN BANANA' }
		]
	});
	collection.set('MEG', {
		id: 16000052,
		name: 'MEG',
		starPowers: [
			{ id: 23000421, name: 'FORCE FIELD' },
			{ id: 23000422, name: 'HEAVY METAL' }
		],
		gadgets: [{ id: 23000423, name: 'JOLTING VOLTS' }]
	});
	collection.set('LOLA', {
		id: 16000053,
		name: 'LOLA',
		starPowers: [
			{ id: 23000431, name: 'IMPROVISE' },
			{ id: 23000432, name: 'SEALED WITH A KISS' }
		],
		gadgets: [
			{ id: 23000433, name: 'FREEZE FRAME' },
			{ id: 23000456, name: 'STUNT DOUBLE' }
		]
	});
	collection.set('FANG', {
		id: 16000054,
		name: 'FANG',
		starPowers: [
			{ id: 23000438, name: 'FRESH KICKS' },
			{ id: 23000439, name: 'DIVINE SOLES' }
		],
		gadgets: [
			{ id: 23000440, name: 'CORN-FU' },
			{ id: 23000464, name: 'ROUNDHOUSE KICK' }
		]
	});
	collection.set('EVE', {
		id: 16000056,
		name: 'EVE',
		starPowers: [{ id: 23000452, name: 'UNNATURAL ORDER' }],
		gadgets: [{ id: 23000454, name: 'GOTTA GO!' }]
	});
	return collection;
}
