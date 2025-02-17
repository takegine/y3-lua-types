// @ts-nocheck
declare interface Game {
    set_material_param(obj: Unit, mat: number, r: number, g: number, b: number, intensity: number, alpha: number): void;
    remove_unit_kv(unit_key: py.UnitKey, key: string): void;
    remove_item_kv(item_key: py.ItemKey, key: string): void;
    remove_ability_kv(ability_key: py.AbilityKey, key: string): void;
    get_camp_by_id(id: py.CampID): py.Camp;
    set_cascaded_shadow_distance(dis: number): void;
    str_to_unit_command_type(str: string): py.UnitCommandType;
    str_to_ability_cast_type(str: string): py.AbilityCastType;
    str_to_link_sfx_key(str: string): py.SfxKey;
    str_to_role_relation(str: string): py.RoleRelation;
    str_to_unit_type(str: string): py.UnitType;
    str_to_unit_key(str: string): py.UnitKey;
    str_to_unit_name(str: string): string;
    str_to_item_key(str: string): py.ItemKey;
    str_to_role_res(str: string): py.RoleResKey;
    str_to_role_status(status: py.RoleStatus): string;
    str_to_role_type(str: string): py.RoleType;
    str_to_ability_key(str: string): py.AbilityKey;
    str_to_ability_type(str: string): py.AbilityType;
    str_to_dest_key(str: string): py.DestructibleKey;
    str_to_project_key(str: string): py.ProjectileKey;
    str_to_particle_sfx_key(str: string): py.SfxKey;
    str_to_tech_key(str: string): py.TechKey;
    str_to_model_key(str: string): py.ModelKey;
    str_to_modifier_key(str: string): py.ModifierKey;
    str_to_modifier_effect_type(str: string): py.ModifierEffectType;
    str_to_modifier_type(str: string): py.ModifierType;
    str_to_camp(str: string): py.Camp;
    str_to_keyboard_key(str: string): py.KeyboardKey;
    str_to_mouse_key(str: string): py.MouseKey;
    str_to_mouse_wheel(str: string): py.MouseWheel;
    str_to_store_key(str: string): py.StoreKey;
    str_to_damage_type(str: string): number;
    str_to_unit_attr_type(str: string): string;
    str_to_audio_key(str: string): py.AudioKey;
    get_icon_id(id: number): py.Texture;
    modify_point_texture(point: Point, terrain_type: number, range: number, area_type: number): void;
    get_point_texture(point: Point): number;
    replace_area_texture(area: Area, old_texture: number, new_texture: number): void;
    set_area_weather(area: Area, weather: number): void;
    set_global_weather(weather: number): void;
    set_fog_attribute(fog: object, direction: number, pos_x: number, pos_y: number, pos_z: number, scale_x: number, scale_y: number, scale_z: number, red: number, green: number, blue: number, concentration: number, speed: number): void;
    set_fog_attr(fog: object, attr: string, value: number): void;
    set_cascaded_shadow_distanc(distance: number): void;
    set_cascaded_shadow_enable(is_enable: boolean): void;
    set_post_effect(player: Player, processing: py.PostEffect): void;
    get_tech_max_level(tech_id: py.TechKey): number;
    get_tech_icon(tech_id: py.TechKey, index: number): py.Texture;
    get_tech_description(tech_id: py.TechKey): string;
    get_tech_name(tech_id: py.TechKey): string;
    end_player_game(player: Player, result: string, is_show: boolean): void;
    pause_game(): void;
    restart_game(fast_restart: boolean): void;
    enable_soft_pause(): void;
    resume_soft_pause(): void;
    set_damage_factor(attack_type: number, armor_type: number, ratio: number): void;
    set_compound_attributes(primary_attribute: string, secondary_attr: string, value: number): void;
    get_compound_attributes(primary_attribute: string, secondary_attr: string): number;
    is_compound_attributes_enabled(): boolean;
    set_day_night_speed(speed: number): void;
    set_day_night_time(time: number): void;
    create_day_night_human_time(time: number, dur: number): void;
    set_random_seed(seed: number): void;
    toggle_day_night_time(is_on: boolean): void;
    enable_grass_by_pos(is_on: boolean, point: Point): void;
    get_current_game_mode(): py.GameMode;
    current_game_run_time(): number;
    get_day_night_time(): number;
    get_damage_ratio(attack_type: number, area_type: number): number;
    get_start_mode(): string;
    get_global_archive(name: string): number;
    get_archive_rank_player_archive_value(file: number, index: number): number;
    get_global_weather(): number;
    locale(key: string): string;
    get_game_init_time_stamp(): number;
    get_game_x_resolution(): number;
    get_game_y_resolution(): number;
    get_graphics_quality(): number;
    get_window_mode(): number;
    number_to_str(value: number): string;
    list_loop(list: userdata): void;
    iter_role_res(is_only_gold: boolean): void;
    set_lua_var(func_name: string, actor: userdata, key: string, index: number): any;
    get_lua_var(func_name: string, key: string, index: number): void;
    init_lua_var(key: string, value: userdata, if_list: any): void;
    exit_game(player: any): void;
    send_signal(player: Player, signal_enum: number, point: Point, visible_enum: Point): void;
    send_custom_event(id: any, table: any): void;
    is_in_radius(point_or_unit: Point | Unit, range: number): boolean;
    set_cure_value(value: number): void;
    str_to_ui_event(str: string): void;
    any_var_to_str(p1: any, p2: any): void;
    get_table(name: string): object;
    is_exist_key(table: any, key: any): void;
    set_globale_view(enable: any): void;
    request_server_time(func: any, context: any): void;
    api_has_kv_any(obj: Unit | Item | Point | Area, key: string): Point;
    get_client_player(): void;
    set_object_color(obj: any, r: any, g: any, b: any, a: any): void;
    clear_table(table: any): void;
    get_num_of_item_mat(item_key: any, comp_item_key: any): void;
    get_num_of_player_attr(item_key: any, role_res_key: any): void;
    get_server_year(v: any): void;
    get_server_month(v: any): void;
    get_server_day(v: any): void;
    get_server_hour(v: any): void;
    string_gsub(mainString: string, findString: string, replaceString: string, num: number): string;
    set_logic_fps(fps: number): void;
    encrypt_table(tab: object): void;
    set_jump_word(enable: boolean): void;
    sfx_switch(player: Player): any;
    reg_sound_area(area: Area): void;
    unreg_sound_area(area: Area): void;
    set_nearby_voice_mode(): any;
    set_nearby_sound_switch(player: Player): any;
    set_nearby_micro_switch(player: Player): any;
    set_role_micro_unit(player: Player, unit: Unit): void;
    close_role_micro_unit(player: Player): void;
    set_role_camp_sound_switch(player: Player): any;
    set_role_camp_micro_switch(player: Player): any;
    set_role_all_sound_switch(player: Player): any;
    set_role_all_micro_switch(player: Player): any;
}
